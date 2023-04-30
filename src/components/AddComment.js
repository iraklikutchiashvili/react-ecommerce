import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { PageContext } from "../context/PageContext";
import { useNavigate } from "react-router-dom/dist";
import uuid from "react-uuid";
import CommentCard from "./CommentCard";

function AddComment() {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const { setPage } = useContext(PageContext);
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const addComment = (productId, userId, comment, userName) => {
    axios
      .put("http://localhost:5000/comments", {
        product_id: productId,
        user_id: userId,
        comment: comment,
        user_name: userName,
      })
      .then(
        (res) => {
          setComments([...comments, res.data[0]]);
        },
        (err) => console.log(err)
      );
  };
  const handleClick = () => {
    if (auth.isAuth) {
      if (comment.length > 0) {
        addComment(parseInt(id), auth.user_id, comment, auth.user_name);
      }
    } else {
      navigate("/auth", { replace: true });
      setPage(4);
    }
    setComment("");
  };

  const getComments = () => {
    axios.get("http://localhost:5000/comments").then(
      (res) => {
        const commentsToDisplay = res.data.filter(
          (comment) => comment.product_id === parseInt(id)
        );
        setComments(...comments, commentsToDisplay);
      },
      (err) => console.log(err)
    );
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <>
      <Card className="add-comment">
        {auth.isAuth ? (
          <IconButton
            sx={{
              background: "#d8d8d8",
              border: "1px solid #1484cb",
              color: "#1484cb",
              width: "53px",
              height: "53px",
              fontSize: "50px",
              width: 100,
              height: 100,
            }}
          >
            {auth.avatar}
          </IconButton>
        ) : (
          <Avatar sx={{ width: 100, height: 100 }} />
        )}
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

      <Box sx={{ display: "grid", gap: "10px", p: "10px" }}>
        <Typography component="div" variant="h4">
          Reviews:
        </Typography>
        {comments.length > 0 &&
          comments.map((comment) => {
            return <CommentCard data={comment} key={uuid()} />;
          })}
      </Box>
    </>
  );
}

export default AddComment;
