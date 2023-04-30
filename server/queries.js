require("dotenv").config();
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: process.env.PASSWORD,
  port: 5432,
});
const getAllUsers = (req, res) => {
  pool.query("SELECT * from users ORDER BY user_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getSingleUser = (req, res) => {
  const user_id = parseInt(req.params.id);
  pool.query(
    "SELECT * FROM users WHERE user_id = $1",
    [user_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    }
  );
};

const createUser = (req, res) => {
  const { name, email, password } = req.body;
  const hash = bcrypt.hashSync(password, saltRounds);

  pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
    [name, email, hash],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.rows[0].user_id}`);
    }
  );
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email],
    (error, results) => {
      if (error) {
        throw error;
      }
      if (results.rows.length === 0) {
        res.status(203).send(`User with prompted email doesn't exist`);
      } else {
        if (bcrypt.compareSync(password, results.rows[0].password)) {
          res.status(201).send(results.rows[0]);
        } else {
          res.status(202).send(`Password is incorrect. Try again`);
        }
      }
    }
  );
};

const addComment = (req, res) => {
  const { user_id, user_name, product_id, comment } = req.body;
  pool.query(
    "INSERT INTO comments (user_id, user_name, product_id, comment) VALUES ($1, $2, $3, $4) RETURNING *",
    [user_id, user_name, product_id, comment],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(results.rows);
    }
  );
};

const getAllComments = (req, res) => {
  pool.query(
    "SELECT * from comments ORDER BY user_id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    }
  );
};

const getCommentByProductId = (req, res) => {
  const product_id = parseInt(req.params.id);
  pool.query(
    "SELECT * from comments WHERE product_id = $1",
    [product_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(results.rows);
    }
  );
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
  loginUser,
  addComment,
  getAllComments,
  getCommentByProductId,
};
