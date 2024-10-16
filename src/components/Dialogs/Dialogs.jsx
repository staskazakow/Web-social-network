import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
const Dialogs = (props) => {
  if(props.isAuth == false) return <Navigate to = "/login"/>
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        {props.state.dialogsData.map((i) => (
          <DialogItem name={i.name} id={i.id} />
        ))}
      </div>
      <div className={s.messages}>
        {props.state.messagesData.map((i) => (
          <Message message={i.message} />
        ))}
      </div>
      <textarea
        value={props.state.NewMessages}
        onChange={(e) => props.onChangeNewMessages(e.target.value)}
      />
      <div>
        <button onClick={props.onAddMessage}>Add</button>
      </div>
    </div>
  );
};
export default Dialogs;
