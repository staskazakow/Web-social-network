import React from "react";
import s from "./Users.module.css";
import usersPhoto from "./users-icon.jpg";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../API/api";
const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => (
        <button
          onClick={() => props.SetCurrentPage(p)}
          className={props.currentPage === p && s.selectedPage}
        >
          {p}
        </button>
      ))}
      {props.users.map((e) => {
        return (
          <div className={s.users__block}>
            <span className={s.follow__block}>
              <span>
                <NavLink to={"/profile/" + e.id}>
                  <img
                    src={e.photos.small !== null ? e.photos.small : usersPhoto}
                    alt="Ava"
                    className={s.ava}
                  />
                </NavLink>
              </span>
              <span>
                {e.followed ? (
                  <button
                    disabled={props.toogleFollowInProgress.some(
                      (id) => id === e.id
                    )}
                    className={s.follow__btn}
                    onClick={() => {
                      props.unfollow(e.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.toogleFollowInProgress.some(
                      (id) => id === e.id
                    )}
                    onClick={() => {
                      props.follow(e.id);
                    }}
                    className={s.follow__btn}
                  >
                    Follow
                  </button>
                )}
              </span>
            </span>
            <span className={s.info__block}>
              <span className={s.name__block}>
                <div className={s.name}>{e.name}</div>
                <div className={s.status}>{e.status}</div>
                <div>{e.uniqueUrlName}</div>
              </span>
              <span className={s.geo__info}>
                <div>e.location.city,</div>
                <div>e.location.country</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Users;
