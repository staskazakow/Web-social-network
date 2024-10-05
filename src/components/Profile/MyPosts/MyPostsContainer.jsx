import {
  addPostActionCreator,
  setNewPostActionCreator,
} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPost: state.ProfilePage.NewPost,
    state: state.ProfilePage.postData
  }
}
let mapDispathToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    onChangePost: (text) => {
      dispatch(setNewPostActionCreator(text))
    }
  }
}
const MyPostsContainer = connect(mapStateToProps,mapDispathToProps)(MyPosts)
export default MyPostsContainer;
