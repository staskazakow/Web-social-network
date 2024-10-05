import React from "react";
import s from "./Post.module.css"

const Post = (props) => {

    return(
        <div className={s.item}>
            {props.id}
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6EjnCiYZb5PVjrOeEfjRJTJ9QyloWGWtX2Q&s" alt="" />
            {props.post}
           <div>likes: {props.likesCount}</div>
        </div>
    )
}
export default Post