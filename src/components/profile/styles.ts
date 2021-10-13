import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme:Theme) => ({
  roundedCircle:{
borderRadius:"50%"
  },
  textCenter:{
    textAlign:"center"
  },
  card:{
    color: "#fff",
    width: "350px",
    borderRadius: "10px",
    background: "linear-gradient(145deg, #9a40a9, #b74cc9)",
    boxShadow: "20px 20px 60px #913ca0, -20px -20px 60px #c552d8",
    border: "none",
    padding:"30px"
  },
  socialButtons:{
    marginTop:"40px"
  }
}));
