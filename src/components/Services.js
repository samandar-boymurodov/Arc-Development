import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import ButtonArrow from "./UI/ButtonArrow";
import { useEffect } from "react";
import cusSofDevIcon from "../assets/Custom Software Icon.svg";
import mobileDevIcon from "../assets/mobileIcon.svg";
import websiteDevIcon from "../assets/websiteIcon.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  firstBlockText: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.7rem",
      paddingRight: "1.7rem",
    },
  },
  learnButton: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.7rem",
    height: 35,
  },
  icon: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "2rem",
    },
  },
}));

export const Services = function () {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const prevTitle = document.title;
    document.title =
      "Top Custom Sofware Development Services | Arc Development";
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <Grid
      container
      direction="column"
      style={{
        paddingLeft: matches ? undefined : "5rem",
        paddingRight: matches ? undefined : "5rem",
      }}
    >
      <Grid
        item
        style={{
          marginTop: matches ? "1rem" : "2rem",
          marginBottom: "4rem",
        }}
      >
        <Typography
          variant="h2"
          color="primary"
          align={matches ? "center" : undefined}
        >
          Services
        </Typography>
      </Grid>
      {/* Mobile Dev */}
      <Grid
        item
        container
        direction="row"
        justify={matches ? "center" : "flex-end"}
      >
        <Grid
          item
          xs={matches ? 12 : undefined}
          className={classes.firstBlockText}
          style={{
            textAlign: matches ? "center" : undefined,
            width: !matches ? "30rem" : undefined,
          }}
        >
          <Typography variant="h4" color="primary">
            IOS/Android App Development
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ marginBottom: "1rem" }}
          >
            Extend Functionality, Extend Access, Increase Engagement.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Integrate your web experience or create a standalone app with <br />{" "}
            either mobile platform
          </Typography>
          <Button variant="outlined" className={classes.learnButton}>
            <span style={{ marginRight: 10 }}>Learn more</span>
            <ButtonArrow
              height={10}
              width={10}
              fill={theme.palette.primary.main}
            />
          </Button>
        </Grid>
        <Grid item>
          <LazyLoadImage
            threshold={400}
            src={mobileDevIcon}
            alt="icon"
            className={classes.icon}
            width="250rem"
          />
        </Grid>
      </Grid>
      {/* Custom Dev */}
      <Grid
        item
        container
        direction="row"
        justify={matches ? "center" : undefined}
        style={{ marginTop: "15rem" }}
      >
        <Grid
          item
          xs={matches ? 12 : undefined}
          className={classes.firstBlockText}
          style={{ textAlign: matches ? "center" : undefined }}
        >
          <Typography variant="h4" color="primary">
            Custom Sofware Development
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ marginBottom: "1rem" }}
          >
            Save energy, Save Time, Save Money.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Complete digital solutions, from investigation to{" "}
            <span className={classes.celebration}>celebration</span>
          </Typography>
          <Button variant="outlined" className={classes.learnButton}>
            <span style={{ marginRight: 10 }}>Learn more</span>
            <ButtonArrow
              height={10}
              width={10}
              fill={theme.palette.primary.main}
            />
          </Button>
        </Grid>
        <Grid item>
          <LazyLoadImage
            threshold={400}
            src={cusSofDevIcon}
            alt="icon"
            className={classes.icon}
          />
        </Grid>
      </Grid>
      {/* Website Dev */}
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: "15rem", marginBottom: "10rem" }}
        justify={matches ? "center" : "flex-end"}
      >
        <Grid
          item
          xs={matches ? 12 : undefined}
          className={classes.firstBlockText}
          style={{
            textAlign: matches ? "center" : undefined,
            width: !matches ? "30rem" : undefined,
          }}
        >
          <Typography variant="h4" color="primary">
            Website Development
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ marginBottom: "1rem" }}
          >
            Reach more, Discover more, Sell more.
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Optimized for Searcg Engines, built for speed.
          </Typography>
          <Button variant="outlined" className={classes.learnButton}>
            <span style={{ marginRight: 10 }}>Learn more</span>
            <ButtonArrow
              height={10}
              width={10}
              fill={theme.palette.primary.main}
            />
          </Button>
        </Grid>
        <Grid item>
          <LazyLoadImage
            threshold={400}
            src={websiteDevIcon}
            alt="icon"
            className={classes.icon}
            width="250rem"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
