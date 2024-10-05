const CHANGE_NEW_MESSAGES = "CHANGE-NEW-MESSAGES";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
let message_state = {
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
};

const MessageReducer = (state = message_state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: 
      return {
        ...state,
        messagesData: [
          ...state.messagesData,
          {
            id: state.messagesData.length + 1,
            message: state.NewMessages,
          }
        ],
        NewMessages: "",
      
    }
    case CHANGE_NEW_MESSAGES: 
      return {
        ...state,
        NewMessages : action.message
      };
    
    default:
      return state;
  }
};
export const changeNewMessagesActionCreator = (message) => ({
  type: CHANGE_NEW_MESSAGES,
  message: message,
});
export const addNewMessagesActionCreator = () => ({
  type: ADD_NEW_MESSAGE,
});
export default MessageReducer;
