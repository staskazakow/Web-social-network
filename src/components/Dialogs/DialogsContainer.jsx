import Dialogs from "./Dialogs";
import {
  addNewMessagesActionCreator,
  changeNewMessagesActionCreator,
} from "../../redux/MessageReducer";
import { connect } from "react-redux";
import { WithAuthRedirect } from "../../hoc/hoc";
import { compose } from "redux";

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
export default compose(
  connect(mapStateToProps,mapDispathToProps),
  WithAuthRedirect
)(Dialogs)

