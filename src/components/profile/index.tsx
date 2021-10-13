import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material"
import { useStyles } from "./styles";
import "./index.css"

const StatsCard= () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid className={classes.card}>
        <Grid className={classes.textCenter}>
          <img
            src="https://i.imgur.com/stD0Q19.jpg"
            width="100"
            className={classes.roundedCircle}
          />
          <Typography variant="h3" > Maria Smantha </Typography>
          <Typography component="span">Android Developer</Typography>
          <Grid container >
            <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
              <Typography variant="h5">Projects </Typography>
              <Typography component="span" >10</Typography>
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
              <Typography variant="h5">Projects </Typography>
              <Typography component="span" >10</Typography>
            </Grid>

            <Grid item xs={6} sm={6} md={4} lg={4} xl={4}>
              <Typography variant="h5">Projects </Typography>
              <Typography component="span" >10</Typography>
            </Grid>
          </Grid>
          <hr className="line" />
          <Typography component="small" className="mt-4">
            I am an android developer working at google Inc at california, USA
          </Typography>

          <Grid className={classes.socialButtons}>
            <button className="neo-button">
              <i className="fa fa-facebook fa-1x"> </i>
            </button>
            <button className="neo-button">
              <i className="fa fa-linkedin fa-1x"> </i>
            </button>
            <button className="neo-button">
              <i className="fa fa-google fa-1x"> </i>
            </button>
            <button className="neo-button">
              <i className="fa fa-youtube fa-1x"> </i>
            </button>
            <button className="neo-button">
              <i className="fa fa-twitter fa-1x"> </i>
            </button>
          </Grid>

          <Grid className="profile mt-5">
            <button className="profile_button px-5">View profile</button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default StatsCard;
