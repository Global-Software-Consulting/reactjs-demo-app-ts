import { Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import DashboardContainer from "../../containers/dashboard";
import { useStyles } from "./styles";
import { useTranslation } from "react-i18next";

const Dashboard = (): JSX.Element => {
  const classes = useStyles();
  const [translation] = useTranslation("translations");

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid item xs={12} className={classes.item}>
        <Typography variant="h4">{translation("dashboard.title")}</Typography>
      </Grid>
      <DashboardContainer />
    </Grid>
  );
};

export default Dashboard;
