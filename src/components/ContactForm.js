import React, { useState } from 'react'
import ErrorIcon from '@mui/icons-material/Error';
import TextField from '@mui/material/TextField';
import { Button, Card } from '@mui/material';

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function ContactForm({display}) {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    msg: ""
  })
  const [showErr, setShowErr] = useState(false)
  const handleInputs = (e) => {
    const name = e.target.name;
    const input = e.target.value;
    setInputValues(prev => {return {...prev, [name]: input}})
  }
  const handleSubmit = () => {
    if(inputValues.name.length > 0 && inputValues.msg.length > 0 && emailRegex.test(inputValues.email)){
      showErr && setShowErr(false);
      alert("Message has been succesfully submited!")
      setInputValues({
        name: "",
        email: "",
        msg: ""
      })
    } else {
      setShowErr(true);
    }
  }
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
    <div style={{color: "#cc0000", display: showErr ? "block" : "none",}}> <ErrorIcon fontSize='0.7rem'/> <span style={{fontSize: "1rem"}}>Please Provide Valid Inputs!</span></div>
    <TextField onChange={handleInputs} id="outlined-basic" label="Name" variant="outlined" name="name" value={inputValues.name}/>
    <TextField onChange={handleInputs} id="outlined-basic" label="Email" variant="outlined" name='email' value={inputValues.email}/>
    <TextField
          onChange={handleInputs}
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          name="msg"
          value={inputValues.msg}
    />
    <Button onClick={handleSubmit} variant="contained" >Send</Button>
    </Card>
  )
}

export default ContactForm