import React, { useState } from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  
  return (
    <div className={s.postsBlock}>
      <div>
        <h3>My Posts</h3>
        <div>
          <textarea
            value={props.newPost}
            onChange={(e) =>
              props.onChangePost(e.target.value)
            }
          ></textarea>
        </div>
        <button onClick={props.addPost}>Add Post</button>
      </div>
      <div className={s.posts}>
        {props.state.map((p) => (
          <Post id={p.id} key = {p.id} post={p.message} likesCount={p.likesCount} />
        ))}
      </div>
    </div>
  );
};
export default MyPosts;
