import Lottie from "react-lottie";
import {
  Grid,
  Typography,
  Hidden,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { CallToAction } from "./UI/CallToAction";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import inAnimation from "../animations/integrationAnimation/data.json";

import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: inAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    paddingTop: "1rem",
    paddingBottom: "10rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
  arrow: {
    marginTop: "0.5rem",
  },
  textContainer: {
    maxWidth: "40em",
  },
}));

export const MobileApps = function () {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "IOS/Android Design and Development | Arc Development";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item container justify={matchesMD ? "center" : "flex-start"}>
          <Hidden mdDown>
            <Grid item className={classes.arrow}>
              <IconButton>
                <img src={backArrow} alt="backArrow" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid
            item
            className={classes.textContainer}
            style={{
              textAlign: matchesMD ? "center" : "inherit",
            }}
          >
            <Typography variant="h2" color="primary">
              iOS/Android App Development
            </Typography>
            <Typography variant="body2" paragraph>
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography variant="body2" paragraph>
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography variant="body2" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant="body2" paragraph>
              Convenience. Connection.
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid item className={classes.arrow}>
              <IconButton>
                <img src={forwardArrow} alt="forwardArrow" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
        <Grid
          container
          item
          direction={matchesSM ? "column" : "row"}
          style={{
            marginTop: "15rem",
            marginBottom: "15rem",
          }}
        >
          <Grid
            item
            container
            direction="column"
            style={{ textAlign: matchesSM ? "center" : "inherit" }}
            md
          >
            <Grid item>
              <Typography variant="h4" color="primary">
                Integration
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Our technology enables an innate interconnection between web and
                mobile applications, putting everything you need right in one
                convenient place.
              </Typography>
              <Typography variant="body2">
                This allows you to extend your reach, reinvent interactions, and
                develop a stronger relationship with your users than ever
                before.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md>
            <Lottie
              options={defaultOptions}
              style={{
                maxWidth: "20rem",
                marginBottom: matchesSM ? "2rem" : 0,
              }}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            style={{ textAlign: matchesSM ? "center" : "right" }}
          >
            <Grid item>
              <Typography variant="h4" color="primary">
                Simultaneous Platform Support
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Our cutting-edge development process allows us to create apps
                for iPhone, Android, and tablets — all at the same time.
              </Typography>
              <Typography variant="body2">
                This significantly reduces costs and creates a more unified
                brand experience across all devices.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          style={{ marginBottom: "15rem" }}
        >
          <Grid item container direction="column" md alignItems="center">
            <Grid item>
              <Typography variant="h4" color="primary">
                Extend Functionality
              </Typography>
            </Grid>
            <Grid item>
              <LazyLoadImage src={swiss} alt="swiss" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{
              marginTop: matchesMD && "10rem",
              marginBottom: matchesMD && "10rem",
            }}
          >
            <Grid item>
              <Typography variant="h4" color="primary">
                Extend Access
              </Typography>
            </Grid>
            <Grid item>
              <LazyLoadImage
                src={access}
                style={{ maxWidth: matchesXS ? "18rem" : "28rem" }}
                alt="access"
              />
            </Grid>
          </Grid>
          <Grid item container direction="column" md alignItems="center">
            <Grid item>
              <Typography variant="h4" color="primary">
                Increase Engagement
              </Typography>
            </Grid>
            <Grid item>
              <LazyLoadImage src={engagement} alt="engagement" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </>
  );
};
