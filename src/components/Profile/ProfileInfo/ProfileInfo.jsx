import React from "react";
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import usersPhoto from "./users-icon.jpg";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
if(!props.profile) {
  return <Preloader/>
}
    return(
        <div>
        {/* <div>
        <img
          className={classes.header__content}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzmQNHB0g1KR0OeeldV5qltnbfIQ8Qyh4QA&s"
        />
      </div> */}
      <div className={classes.AvaDescription}>
        <img
          className={classes.avatar__content}
          src={!props.profile.photos.large ? usersPhoto : props.profile.photos.large}
        />
        <ProfileStatus status = "Hello"/>
        <div>Description: {props.profile.aboutMe}</div>
        <div>Name: {props.profile.fullName}</div>
      </div>
        </div>
    )
}
export default ProfileInfo