import { Avatar, Button, Card, TextField } from "@mui/material";
import React, { useState } from "react";

function AddComment() {
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleClick = () => {
    comment.length > 0 && alert("Comment Added");
    setComment("");
  };
  return (
    <Card className="add-comment">
      <Avatar sx={{ width: 100, height: 100 }} />
      <TextField
        onChange={handleChange}
        sx={{ width: "70%", height: "100px" }}
        id="outlined-multiline-static"
        label="Comment"
        multiline
        rows={4}
        name="comment"
        value={comment}
      />
      <Button onClick={handleClick} variant="contained" size="large">
        Add Comment
      </Button>
    </Card>
  );
}

export default AddComment;
