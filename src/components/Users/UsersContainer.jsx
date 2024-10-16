import React from "react";
import { connect } from "react-redux";
import { follow, getUsers, unfollow } from "../../redux/UsersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { Navigate } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/hoc";
import { compose } from "redux";
class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }
  SetCurrentPage = (page) => {
    this.props.getUsers(page, this.props.pageSize);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            SetCurrentPage={this.SetCurrentPage}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            toogleFollowInProgress={this.props.toogleFollowInProgress}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.UsersPage.users,
    pageSize: state.UsersPage.pageSize,
    totalUsersCount: state.UsersPage.totalUsersCount,
    currentPage: state.UsersPage.currentPage,
    toogleFollowInProgress: state.UsersPage.toogleFollowInProgress,
  };
};
export default compose(
  connect(mapStateToProps, {
    getUsers,
    follow,
    unfollow,
  }),
  WithAuthRedirect
)(UsersContainer);

