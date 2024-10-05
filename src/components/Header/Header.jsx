import React from "react";
import h from "./Header.module.css"
import { NavLink } from "react-router-dom";
const Header = (props) => {
    return(
    <header className={h.header}>
      <NavLink to={"/profile"}>
        <img
          src="https://i0.wp.com/bluebubbleworld.org/wp-content/uploads/2017/05/logo-blue-just-image-300x300.png?resize=300%2C300&ssl=1"
          alt="logo"
        />
      </NavLink>
 
      <div className={h.Login_block}>
      {props.isAuth ? <div style={{color:"white"}}>{props.login}</div>
      :  <NavLink className={h.login} to={"./login"}>Login</NavLink>}
       
      </div>
      </header>
    )
}
export default Header;