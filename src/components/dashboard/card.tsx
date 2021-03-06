import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";

interface Data {
  data: {
    count: string | number;
    title: string;
  };
}

const StatsCard = ({ data }: Data): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" className={classes.heading}>
          {data?.count}
        </Typography>
        <Typography className={classes.footer} sx={{ opacity: 0.72 }}>
          {data?.title}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default StatsCard;
