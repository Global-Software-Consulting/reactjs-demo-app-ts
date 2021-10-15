import React from "react";
import { Grid } from "@mui/material";
import ProfileComponent from "../../components/profile";
const Profile: React.FC = (): JSX.Element => {
  return (
    <Grid container className="App">
      <ProfileComponent />
    </Grid>
  );
};

export default Profile;
