import React from "react";
import { Redirect } from "react-router-dom";
// @material-ui/core components
function UserProfile() {
  return <Redirect from="/" to="/user/home" />;
}

export default UserProfile;
