import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };
  activatedEditMode() {
    this.setState({
        editMode: true,
    })
  }
  deActivatedEditMode() {
    this.setState({
        editMode: false,
    })
  }
  render() {
    return (
      <div>
        {this.state.editMode ? (
          <div>
            <input autoFocus={true} onBlur={this.deActivatedEditMode.bind(this)} value={this.props.status} />
          </div>
        ) : (
          <div>
            <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
