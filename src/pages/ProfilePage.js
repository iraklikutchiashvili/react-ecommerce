import React from "react";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div className="auth-page">
      <Card className="auth-content">
        <Typography component="div" variant="h4" sx={{ color: "#1484cb" }}>
          SIGN IN
        </Typography>
        <TextField
          className="email-pwd"
          size="large"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
        />
        <TextField
          className="email-pwd"
          size="large"
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
        />
        <Button className="email-pwd" variant="contained">
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
