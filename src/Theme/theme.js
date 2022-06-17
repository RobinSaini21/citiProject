/** @format */
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserView,
  MobileView,
  isBrowser,
   isMobile,
} from "react-device-detect";

export const useStyles = makeStyles({
  root: {
    "&::placeholder": {
      color: "red",
    },
  },
  input: {
    background: isMobile ? "white" : null,
    borderRadius: "16px",
    border: "1px solid grey",
    "&:hover": {
      border: "2px solid #FF6842",
    },
    "&.Mui-focused": {
      border: "2px solid #FF6842",
    },
    height: "56px",
  },
  button: {
    background: "linear-gradient(135.27deg, #FF6842 42.19%, #E63F19 94.2%)",
    height: "56px",
    borderRadius: "16px",
  },
});

 export const label = {
  marginLeft: "4px",
};
