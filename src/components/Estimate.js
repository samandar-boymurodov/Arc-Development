import {
  Grid,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import Lottie from "react-lottie";
import { useEffect } from "react";

// Images import
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
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

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    subtitle: "",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        caption: "",
        icons: software,
        alt: "software",
        const: 0,
        selected: false,
      },
      {
        id: 2,
        title: "IOS/Android App Development",
        caption: "",
        icons: mobile,
        alt: "mobile",
        const: 0,
        selected: false,
      },
      {
        id: 3,
        title: "Website Development",
        caption: "",
        icons: website,
        alt: "website",
        const: 0,
        selected: false,
      },
    ],
  },
];

export const Estimate = function () {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Free Custom Software Estimate | Arc Development";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        lg
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "5rem",
            marginTop: "2rem",
          }}
        >
          <Typography
            variant="h2"
            color="primary"
            align={matchesMD ? "center" : undefined}
          >
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{
            marginTop: "7.5rem",
            maxWidth: "50rem",
            marginRight: matchesMD ? 0 : "10rem",
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
          marginRight: matchesMD ? 0 : "2rem",
          marginBottom: "25rem",
        }}
      >
        {defaultQuestions
          .filter((q) => q.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid
                item
                style={{
                  marginTop: "5rem",
                }}
              >
                <Typography
                  variant="h2"
                  color="primary"
                  style={{
                    fontWeight: 500,
                    fontSize: "2.25rem",
                    marginRight: matchesSM ? "1rem" : undefined,
                    marginLeft: matchesSM ? "1rem" : undefined,
                  }}
                  align="center"
                >
                  {question.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ marginBottom: "2.5rem" }}
                  align="center"
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container>
                {question.options.map((option, index) => (
                  <Grid
                    key={index}
                    item
                    container
                    direction="column"
                    md
                    component={Button}
                    style={{
                      display: "grid",
                      marginBottom: matchesSM ? "1.5rem" : undefined,
                      textTransform: "none",
                    }}
                  >
                    <Grid
                      item
                      container
                      direction="column"
                      alignItems="center"
                      style={{ maxWidth: "14rem" }}
                    >
                      <Grid item>
                        <Typography variant="h6" align="center">
                          {option.title}
                        </Typography>
                      </Grid>
                      <Grid item style={{ marginBottom: "1rem" }}>
                        <Typography variant="caption" color="textSecondary">
                          {option.caption}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icons}
                        className={classes.icon}
                        alt={option.alt}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

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
