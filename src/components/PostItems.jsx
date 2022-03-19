import React from "react";
import MyButton from "./UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItemes = (props) => {
  const router = useNavigate()
    return (
        <div className="post">
        <div className="postContent">
          <h4>{props.post.id}. {props.post.title}</h4>
          <div>{props.post.body}</div>
        </div>
        <div className="postBtn">
          <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Open</MyButton>
          <div className="postBtn">
          <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
          </div>
          </div>
      </div>
    )
}

export default PostItemes;