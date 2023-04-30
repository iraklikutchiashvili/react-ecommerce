import React, { useContext, useEffect, useState } from "react";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { PageContext } from "../context/PageContext";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function LoginPage() {
  const [inputValues, setInputValues] = useState({
    password: "",
    email: "",
  });
  const [showErr, setShowErr] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const { setPage } = useContext(PageContext);
  const navigate = useNavigate();
  const handleInputs = (e) => {
    const name = e.target.name;
    const input = e.target.value;
    setInputValues((prev) => {
      return { ...prev, [name]: input };
    });
  };
  const loginUser = (data) => {
    axios.post("http://localhost:5000/users/login", data).then(
      (res) => {
        if (res.status === 201) {
          const initialsForAvatar = res.data.name.slice(0, 2);
          const user_id = res.data.user_id;
          const user_name = res.data.name;
          setAuth({
            ...auth,
            isAuth: true,
            avatar: initialsForAvatar,
            user_id: user_id,
            user_name: user_name,
          });
          alert("Succesfully logged in");
          navigate("/", { replace: true });
          setPage(0);
        } else if (res.status === 202) {
          alert("Password is incorrect. Try again!");
        } else if (res.status === 203) {
          alert("User doesn't exits");
        }
      },
      (error) => console.log(error)
    );
  };
  const handleSubmit = () => {
    if (inputValues.password.length > 0 && emailRegex.test(inputValues.email)) {
      showErr && setShowErr(false);
      loginUser(inputValues);
      setInputValues({
        password: "",
        email: "",
      });
    } else {
      setShowErr(true);
    }
  };
  return (
    <div className="auth-page">
      <Card className="auth-content">
        <Typography component="div" variant="h4" sx={{ color: "#1484cb" }}>
          SIGN IN
        </Typography>
        <div style={{ color: "#cc0000", display: showErr ? "block" : "none" }}>
          {" "}
          <ErrorIcon fontSize="0.7rem" />{" "}
          <span style={{ fontSize: "1rem" }}>Please Provide Valid Inputs!</span>
        </div>
        <TextField
          onChange={handleInputs}
          value={inputValues.email}
          autoComplete="off"
          className="email-pwd"
          size="large"
          id="outlined-email"
          label="Email"
          variant="outlined"
          name="email"
          required
        />
        <TextField
          onChange={handleInputs}
          value={inputValues.password}
          className="email-pwd"
          size="large"
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          required
        />
        <Button
          className="email-pwd"
          variant="contained"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Typography component="div" variant="h7" sx={{ color: "#1484cb" }}>
          Don't have account? Click here to{" "}
          <Link
            to="register"
            style={{
              textDecoration: "line",
              fontWeight: "bold",
              width: "auto",
            }}
          >
            <span>Register</span>
          </Link>
        </Typography>
      </Card>
    </div>
  );
}

export default LoginPage;
