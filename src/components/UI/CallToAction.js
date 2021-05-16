import { makeStyles, useTheme } from "@material-ui/styles";
import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";

const useClasses = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.7rem",
    height: 35,
  },
  backImage: {
    backgroundImage: `url(${background})`,
    height: "100%",
    width: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
    backgroundAttachment: "fixed",
  },
  estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.secondary.main,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    marginRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
    },
  },
  textContainer: {
    marginLeft: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
    },
  },
}));

export const CallToAction = function () {
  const classes = useClasses();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      className={classes.backImage}
      style={{ height: "60rem" }}
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
    >
      <Grid
        item
        style={{
          textAlign: matchesSM ? "center" : undefined,
        }}
        className={classes.textContainer}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2" color="primary">
              Simple Software. <br /> Revolutionary Results.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
              Take advantage of 21st Century.
            </Typography>
          </Grid>
          <Grid>
            <Button variant="outlined" className={classes.learnButton}>
              <span style={{ marginRight: 10 }}>Learn more</span>
              <ButtonArrow
                height={10}
                width={10}
                fill={theme.palette.primary.main}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          className={classes.estimate}
          style={{ marginTop: matchesSM ? "2.5rem" : 0 }}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};
