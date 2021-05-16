import { makeStyles, useTheme } from "@material-ui/styles";
import {
  Grid,
  Typography,
  IconButton,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import Lottie from "react-lottie";
import { CallToAction } from "./UI/CallToAction";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import bulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import root from "../assets/root.svg";

import docAnimation from "../animations/documentsAnimation/data";
import peopleAnimation from "../animations/scaleAnimation/data.json";
import autoAnimation from "../animations/automationAnimation/data.json";
import uxAnimation from "../animations/uxAnimation/data";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    maxWidth: "40em",
  },
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
  itemContainer: {
    maxWidth: "40rem",
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: docAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const scaleOptions = {
  loop: true,
  autoplay: true,
  animationData: peopleAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const autoOptions = {
  loop: true,
  autoplay: true,
  animationData: autoAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const uxOptions = {
  loop: true,
  autoplay: true,
  animationData: uxAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const CustomSofware = function () {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
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
              Custom Software Development
            </Typography>
            <Typography variant="body2" paragraph>
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
            <Typography variant="body2" paragraph>
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work. Without using any software
              at all you risk falling behind competitors and missing out on huge
              savings from increased efficiency.
            </Typography>
            <Typography variant="body2" paragraph>
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
            <Typography variant="body2" paragraph>
              We create exactly what you what, exactly how you want it.
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
          item
          container
          direction="row"
          style={{
            marginTop: "15rem",
            marginBottom: "20rem",
          }}
        >
          <Grid item container md direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h4" color="primary">
                Save Energy
              </Typography>
            </Grid>
            <Grid item>
              <img src={bulb} alt="bulb" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            md
            direction="column"
            alignItems="center"
            style={{
              marginTop: matchesSM ? "10rem" : undefined,
              marginBottom: matchesMD ? "10rem" : undefined,
            }}
          >
            <Grid item>
              <Typography variant="h4" color="primary">
                Save Time
              </Typography>
            </Grid>
            <Grid item>
              <img src={stopwatch} alt="stopwatch" />
            </Grid>
          </Grid>
          <Grid item container md direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h4" color="primary">
                Save Money
              </Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt="cash" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="space-between"
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            direction={matchesMD ? "column" : "row"}
            alignItems={matchesMD ? "center" : undefined}
            style={{ marginBottom: matchesMD ? "15rem" : 0 }}
          >
            <Grid
              item
              container
              direction="column"
              md
              style={{
                textAlign: matchesSM ? "center" : "inherit",
              }}
            >
              <Grid item>
                <Typography variant="h4" color="primary">
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography variant="body2" paragraph>
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
                <Typography variant="body2" paragraph>
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={defaultOptions}
                style={{
                  maxWidth: 275,
                  maxHeight: 275,
                  minHeight: 250,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            direction={matchesMD ? "column" : "row"}
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid item md>
              <Lottie
                options={scaleOptions}
                style={{
                  maxWidth: 280,
                  maxHeight: 260,
                }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? "center" : "right"}
                  color="primary"
                >
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align={matchesSM ? "center" : "right"}
                  variant="body2"
                >
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify="center"
          style={{
            marginTop: "20rem",
            marginBottom: "20rem",
          }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            className={classes.textContainer}
          >
            <Grid item>
              <img
                height="450rem"
                width={matchesSM ? "300rem" : "450rem"}
                src={root}
                alt="root"
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                color="primary"
                align="center"
              >
                Root-Cause Analysis
              </Typography>
              <Typography variant="body2" paragraph align="center">
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
              <Typography variant="body2" paragraph align="center">
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="space-between"
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          style={{
            marginBottom: "10rem",
          }}
        >
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            style={{
              marginBottom: matchesMD ? "15rem" : 0,
              textAlign: matchesSM ? "center" : "inherit",
            }}
            direction={matchesMD ? "column" : "row"}
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" color="primary">
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  Why waste time when you don’t have to?
                </Typography>
                <Typography variant="body2" paragraph>
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography variant="body2" paragraph>
                  By utilizing digital forIncreasing efficiency increases
                  profits, leaving you more time to focus on your business, not
                  busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md>
              <Lottie
                options={autoOptions}
                style={{
                  maxWidth: 280,
                  maxHeight: 290,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            className={classes.itemContainer}
            md
            direction={matchesMD ? "column" : "row"}
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid item md>
              <Lottie
                options={uxOptions}
                style={{
                  maxWidth: 155,
                  maxHeight: 310,
                }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? "center" : "right"}
                  color="primary"
                >
                  User Experience <br /> Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography
                  variant="body2"
                  paragraph
                  align={matchesSM ? "center" : "right"}
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </>
  );
};
