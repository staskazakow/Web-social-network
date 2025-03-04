import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
let mapStateToPropsForRedirect = (state) => ({
    isAuth:state.auth.isAuth
})
export const WithAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(this.props.isAuth == false) return <Navigate to = "/login"/> 
            return <Component {...this.props}/>
        }
    }
    let withRedirect = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return withRedirect
}