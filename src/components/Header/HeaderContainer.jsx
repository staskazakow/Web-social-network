import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/authReducer";
import { userAPI } from "../../API/api";
class HeaderContainer extends React.Component {
  componentDidMount() {
    userAPI.getAuth()
      .then((res) => {
        if(res.resultCode === 0) {
            let {id,email,login} = res.data
              this.props.setAuthUserData(id,email,login)
        }
    });
}
render() {
    return <Header {...this.props} />;
}
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login
})
export default connect (mapStateToProps, {setAuthUserData}) (HeaderContainer);
