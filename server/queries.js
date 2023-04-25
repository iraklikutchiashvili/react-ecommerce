require("dotenv").config();
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: process.env.PASSWORD,
  port: 5432,
});
const getAllUsers = (req, res) => {
  pool.query("SELECT * from users ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getSingleUser = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const createUser = (req, res) => {
  const { name, email } = req.body;

  pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};

module.exports = {
  getAllUsers,
  getSingleUser,
  createUser,
};
