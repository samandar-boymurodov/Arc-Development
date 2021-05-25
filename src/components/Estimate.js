import {
  Grid,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import Lottie from "react-lottie";

// Images import
import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import people from "../assets/people.svg";
import usersIcon from "../assets/users.svg";
import iPhone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";
import estimateAnimation from "../animations/estimateAnimation/data.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: estimateAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyles = makeStyles((theme) => ({
  icon: {
    width: "12rem",
    height: "10rem",
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 50,
    width: 225,
    backgroundColor: theme.palette.secondary.main,
    fontSize: "1.25rem",
    marginTop: "5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

export const Estimate = function () {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container>
      <Grid item container direction="column" lg>
        <Grid
          item
          style={{
            marginLeft: "5rem",
            marginTop: "2rem",
          }}
        >
          <Typography variant="h2" color="primary">
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginTop: "7.5rem",
            maxWidth: "50rem",
            marginRight: "10rem",
          }}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{
          marginRight: "2rem",
          marginBottom: "25rem",
        }}
      >
        <Grid
          item
          style={{
            marginTop: "5rem",
            marginBottom: "2.5rem",
          }}
        >
          <Typography
            gutterBottom
            variant="h2"
            color="primary"
            style={{ fontWeight: 500, fontSize: "2.25rem" }}
            align="center"
          >
            Which service are you interested in?
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12rem" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1rem" }}
              >
                Cusom Sofware Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={software} className={classes.icon} />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12rem" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1rem" }}
              >
                IOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={mobile} className={classes.icon} />
            </Grid>
          </Grid>
          <Grid item container direction="column" md>
            <Grid item style={{ maxWidth: "12rem" }}>
              <Typography
                variant="h6"
                align="center"
                style={{ marginBottom: "1rem" }}
              >
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <img src={website} className={classes.icon} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="space-around"
          style={{
            marginTop: "3rem",
          }}
        >
          <Grid item>
            <IconButton>
              <img src={backArrow} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <img src={forwardArrow} />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button className={classes.estimateButton} variant="contained">
            Get Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
