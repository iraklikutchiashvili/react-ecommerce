import { TextField, Card, Typography, Button } from "@mui/material";
import React from "react";

function RegisterPage() {
  return (
    <div className="auth-page">
      <Card className="auth-content">
        <Typography component="div" variant="h4" sx={{ color: "#1484cb" }}>
          SIGN UP
        </Typography>
        <TextField
          className="email-pwd"
          size="large"
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          name="fullname"
        />
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
        <TextField
          className="email-pwd"
          size="large"
          id="outlined-basic"
          label="Repeat Password"
          variant="outlined"
          name="repassword"
        />
        <Button className="email-pwd" variant="contained">
          Register
        </Button>
      </Card>
    </div>
  );
}

export default RegisterPage;
