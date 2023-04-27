import { TextField, Typography, Button, FormControl } from "@mui/material";
import React, { useContext, useState } from "react";
import axios from "axios";
import ErrorIcon from "@mui/icons-material/Error";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function RegisterPage() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [showErr, setShowErr] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleInputs = (e) => {
    const name = e.target.name;
    const input = e.target.value;
    setInputValues((prev) => {
      return { ...prev, [name]: input };
    });
  };
  const postData = (data) => {
    axios.post("http://localhost:5000/users", data).then(
      (res) => {
        if (res.status === 201) {
          alert("Succesfully registered");
          navigate("/auth", { replace: true });
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };
  const handleSubmit = () => {
    if (
      inputValues.name.length > 0 &&
      inputValues.password.length > 0 &&
      inputValues.repassword.length > 0 &&
      inputValues.password === inputValues.repassword &&
      emailRegex.test(inputValues.email)
    ) {
      showErr && setShowErr(false);
      postData(inputValues);
      setInputValues({
        name: "",
        email: "",
        password: "",
        repassword: "",
      });
    } else {
      setShowErr(true);
    }
  };

  return (
    <div className="auth-page">
      <FormControl className="auth-content">
        <Typography component="div" variant="h4" sx={{ color: "#1484cb" }}>
          SIGN UP
        </Typography>
        <div style={{ color: "#cc0000", display: showErr ? "block" : "none" }}>
          {" "}
          <ErrorIcon fontSize="0.7rem" />{" "}
          <span style={{ fontSize: "1rem" }}>Please Provide Valid Inputs!</span>
        </div>
        <TextField
          onChange={handleInputs}
          value={inputValues.name}
          className="email-pwd"
          size="large"
          id="outlined-name"
          label="Full Name"
          variant="outlined"
          name="name"
        />
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
        />
        <TextField
          onChange={handleInputs}
          value={inputValues.password}
          type="password"
          className="email-pwd"
          size="large"
          label="Password"
          variant="outlined"
          name="password"
        />
        <TextField
          onChange={handleInputs}
          value={inputValues.repassword}
          type="password"
          className="email-pwd"
          size="large"
          label="Repeat Password"
          variant="outlined"
          name="repassword"
        />
        <Button
          onClick={handleSubmit}
          className="email-pwd"
          variant="contained"
        >
          Register
        </Button>
      </FormControl>
    </div>
  );
}

export default RegisterPage;
