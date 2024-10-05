import React from "react";
import { connect } from "react-redux";
import {
  OnFollowChange,
  PageChange,
  SetTotalCount,
  SetUsers,
  ToogleFollowProgress,
  ToogleIsFetching,
} from "../../redux/UsersReducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import { getUsers, userAPI } from "../../API/api";
class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.ToogleIsFetching(false);
    userAPI.getUsers(this.props.currentPage,this.props.pageSize)
      .then((res) => {
        this.props.SetUsers(res.items);

        if (res.totalCount > 100) {
          this.props.ToogleIsFetching(false);
          this.props.SetTotalCount(100);
        } else {
          this.props.ToogleIsFetching(false);
          this.props.SetTotalCount(res.totalCount);
        }
      });
  }
  SetCurrentPage = (page) => {
    this.props.ToogleIsFetching(true);
    this.props.PageChange(page);
    userAPI.getUsers(this.props.currentPage,this.props.pageSize)
      .then((res) => {
        this.props.ToogleIsFetching(false);
        this.props.SetUsers(res.items);
        this.props.SetTotalCount(res.totalCount);
        if (res.totalCount > 100) {
          this.props.ToogleIsFetching(false);
          this.props.SetTotalCount(100);
        } else {
          this.props.ToogleIsFetching(false);
          this.props.SetTotalCount(res.totalCount);
        }
      });
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
            OnFollowChange={this.props.OnFollowChange}
            ToogleFollowProgress = {this.props.ToogleFollowProgress}
            toogleFollowInProgress = {this.props.toogleFollowInProgress}
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
    isFetching: state.UsersPage.isFetching,
    toogleFollowInProgress: state.UsersPage.toogleFollowInProgress,
  };
};

export default connect(mapStateToProps, {
  OnFollowChange,
  SetUsers,
  PageChange,
  SetTotalCount,
  ToogleIsFetching,
  ToogleFollowProgress
})(UsersContainer);
