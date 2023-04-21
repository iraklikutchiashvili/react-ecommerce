import React, { useState } from "react";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorIcon from "@mui/icons-material/Error";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ProfilePage() {
  const [inputValues, setInputValues] = useState({
    password: "",
    email: "",
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
    if (inputValues.password.length > 0 && emailRegex.test(inputValues.email)) {
      showErr && setShowErr(false);
      alert("Logged In");
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

export default ProfilePage;
