import MessageReducer from "./MessageReducer";
import ProfileReducer from "./ProfileReducer";
import SideBarReducer from "./SideBarReducer";
let store = {
  _state: {
    MessagePage: {
      dialogsData: [
        { id: 1, name: "Artur" },
        { id: 2, name: "Ivan" },
        { id: 3, name: "Stas" },
        { id: 4, name: "Gleb" },
        { id: 5, name: "Dmitry" },
        { id: 6, name: "Rasul" },
      ],
      messagesData: [
        { id: 1, message: "Hello World!" },
        { id: 2, message: "Hi,how are you" },
        { id: 3, message: "Yo" },
      ],
      NewMessages: "Messages",
    },
    ProfilePage: {
      postData: [
        { id: 1, message: "post props", likesCount: 12 },
        { id: 2, message: "two post", likesCount: 764 },
      ],
      NewPost: "Введите текст поста",
    },
    SideBar: {},
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    return;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.MessagePage = MessageReducer(action,this._state.MessagePage)
    this._state.ProfilePage = ProfileReducer(action,this._state.ProfilePage)
    this._state.SideBar = SideBarReducer(action,this._state.SideBar)
    this._callSubscriber(this._state)
  },
};

export default store;
