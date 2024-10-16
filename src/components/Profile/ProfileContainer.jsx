import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfile,} from "../../redux/ProfileReducer";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/hoc";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount(){
    this.props.getProfile(this.props.router.params.userId)  
}
  
  render(){
    if(this.props.isAuth == false) return <Navigate to = "/login"/>
    return (
      <div>
        <Profile {...this.props} profile = {this.props.profile} />
      </div>
    );
  }
  
};
function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}
let mapStateToProps = (state) => ({
profile:state.ProfilePage.profile,
})
export default compose(
  connect(mapStateToProps,{getProfile}),
  withRouter,
  WithAuthRedirect
)(ProfileContainer)

