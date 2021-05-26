import {
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useEffect } from "react";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import seo from "../assets/seo.svg";
import outreach from "../assets/outreach.svg";
import ecommerce from "../assets/ecommerce.svg";
import { CallToAction } from "./UI/CallToAction";

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

export const WebDev = function () {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Stunning Custom Website Design | Arc Development";
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
              Website Development
            </Typography>
            <Typography variant="body2" paragraph>
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography variant="body2" paragraph>
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography variant="body2" paragraph>
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
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
          direction={matchesSM ? "column" : "row"}
          item
          alignItems="center"
          style={{
            marginBottom: "15rem",
            marginTop: "15rem",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" color="primary">
                  Analytics
                </Typography>
              </Grid>
              <Grid item>
                <img
                  src={analytics}
                  alt="analytics"
                  style={{
                    marginLeft: "-2.75rem",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: "30rem",
            }}
          >
            <Typography variant="body2">
              Knowledge is power, and data is 21st Century gold. Analyzing this
              data can reveal hidden patterns and trends in your business,
              empowering you to make smarter decisions with measurable effects.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          item
          alignItems="center"
          justify="flex-end"
          style={{
            marginBottom: "15rem",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography align="center" variant="h4" color="primary">
                  E-Commerce
                </Typography>
              </Grid>
              <Grid item>
                <img src={ecommerce} alt="ecommerce" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: "30rem",
              marginLeft: !matchesSM ? "1rem" : 0,
            }}
          >
            <Typography variant="body2" paragraph>
              It’s no secret that people like to shop online.
            </Typography>
            <Typography variant="body2">
              In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
              for your slice of that pie.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          item
          alignItems="center"
          style={{
            marginBottom: "15rem",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" color="primary">
                  Outreach
                </Typography>
              </Grid>
              <Grid item>
                <img src={outreach} alt="outreach" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: "30rem",
              marginLeft: !matchesSM ? "1rem" : 0,
            }}
          >
            <Typography variant="body2">
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          style={{
            textAlign: matchesSM ? "center" : "inherit",
          }}
          item
          alignItems="center"
          justify="flex-end"
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography align="center" variant="h4" color="primary">
                  Search Engine <br />
                  Optimization
                </Typography>
              </Grid>
              <Grid item>
                <img src={seo} alt="seo" />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              maxWidth: "30rem",
              marginLeft: !matchesSM ? "1rem" : 0,
            }}
          >
            <Typography variant="body2" paragraph>
              How often have you ever been to the second page of Google results?
            </Typography>
            <Typography variant="body2">
              If you’re like us, probably never.
            </Typography>
            <Typography variant="body2">
              Customers don’t go there either, so we make sure your website is
              designed to end up on top.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </>
  );
};
