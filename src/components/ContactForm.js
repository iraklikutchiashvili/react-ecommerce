import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card } from '@mui/material';

function ContactForm({display}) {
  return (
    <Card
      component="form"
      sx={{
        width: "80%",
        p: "20px",
        m: "20px auto 0 auto",
        display: display ? "flex" : "none",
        gap: "20px",
        flexDirection: "column"
      }}
      noValidate
      autoComplete="off"
    >
    <TextField id="outlined-basic" label="Name" variant="outlined" />
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
    />
    <Button variant="contained" >Send</Button>
    </Card>
  )
}

export default ContactForm