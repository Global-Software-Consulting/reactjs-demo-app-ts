import React from "react";
import { Grid } from "@mui/material";
import ProfileComponent from "../../components/profile";
import Head from "../../components/head";

const Profile: React.FC = (): JSX.Element => {
  return (
    <Grid container className="App">
      <Head title="Profile" description="Check your Profile" />
      <ProfileComponent />
    </Grid>
  );
};

export default Profile;
