const SET_NEW_POST = "SET-NEW-POST";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE"
let profile_state = {
  postData: [
    { id: 1, message: "post props", likesCount: 12 },
    { id: 2, message: "two post", likesCount: 764 },
  ],
  NewPost: "Введите текст поста",
  profile:null
};
const ProfileReducer = (state = profile_state, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postData: [
          ...state.postData,
          {
            id: state.postData.length + 1,
            message: state.NewPost,
            likesCount: 0,
          },
        ],
        NewPost: "",
      };
    }
    case SET_NEW_POST: {
      return {
        ...state,
        NewPost: action.text
      };
    }
    case SET_USER_PROFILE: {
      return {...state, profile:action.profile}
    }
    default:
      return state;
  }
};
export const setUserProfile = (profile) => ({
  type:SET_USER_PROFILE,
  profile:profile
})
export const setNewPostActionCreator = (text) => ({
  type: SET_NEW_POST,
  text: text,
});
export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export default ProfileReducer;
