import React from "react";
import Dialogs from "./Dialogs";
import {
  addNewMessagesActionCreator,
  changeNewMessagesActionCreator,
} from "../../redux/MessageReducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {

  return {
    state: state.MessagePage,
  }
}
let mapDispathToProps = (dispatch) => {

  return {
    onChangeNewMessages: (text) => {
      dispatch(changeNewMessagesActionCreator(text))
    },
    onAddMessage: () => {
      dispatch(addNewMessagesActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispathToProps)(Dialogs)
export default DialogsContainer;
