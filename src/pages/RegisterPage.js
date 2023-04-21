import { TextField, Card, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function RegisterPage() {
  const [inputValues, setInputValues] = useState({
    fullname: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [showErr, setShowErr] = useState(false);
  const handleInputs = (e) => {
    const name = e.target.name;
    const input = e.target.value;
    setInputValues((prev) => {
      return { ...prev, [name]: input };
    });
  };
  const handleSubmit = () => {
    if (
      inputValues.fullname.length > 0 &&
      inputValues.password.length > 0 &&
      inputValues.repassword.length > 0 &&
      inputValues.password === inputValues.repassword &&
      emailRegex.test(inputValues.email)
    ) {
      showErr && setShowErr(false);
      alert("Signed Up Succesfully");
      setInputValues({
        fullname: "",
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
      <Card className="auth-content">
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
          value={inputValues.fullname}
          className="email-pwd"
          size="large"
          id="outlined-name"
          label="Full Name"
          variant="outlined"
          name="fullname"
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
      </Card>
    </div>
  );
}

export default RegisterPage;
