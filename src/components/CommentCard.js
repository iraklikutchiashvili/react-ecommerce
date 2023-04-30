import { Card, Typography, Avatar, IconButton } from "@mui/material";
import React from "react";

function CommentCard({ data }) {
  return (
    <Card sx={{ p: "20px" }}>
      <IconButton
        sx={{
          width: 50,
          height: 50,
          background: "#d8d8d8",
          border: "1px solid #1484cb",
          color: "#1484cb",
          width: "53px",
          height: "53px",
          fontSize: "20px",
        }}
      >
        {data.user_name.slice(0, 2)}
      </IconButton>
      <Typography component="div" variant="h5">
        {data.user_name}
      </Typography>
      <Typography
        component="div"
        variant="h8"
        sx={{ overflowWrap: "break-word" }}
      >
        {data.comment}
      </Typography>
    </Card>
  );
}

export default CommentCard;
