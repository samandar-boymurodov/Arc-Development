import { Grid, Typography, useMediaQuery, Avatar } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";
import history from "../assets/history.svg";

import profile from "../assets/founder.jpg";
import yearBook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
    },
  },
  avatar: {
    height: "25rem",
    width: "25rem",
  },
  mission: {
    fontWeight: 300,
    fontStyle: "italic",
    maxWidth: "50rem",
    lineHeight: 1.4,
    fontSize: "1.5rem",
  },
}));

export const About = function () {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer}>
        <Typography variant="h2" color="primary">
          About Us
        </Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            className={classes.mission}
          >
            Whether it be person to person, business to consumer, or an
            individual to their interests, technology is meant to bring us
            closer to what we care about in the best way possible. Arc
            Development will use that principle to provide fast, modern,
            inexpensive, and aesthetic software to the Midwest and beyond.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className={classes.rowContainer}
        justify="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            style={{
              maxWidth: "35rem",
            }}
          >
            <Grid item>
              <Typography variant="h4" color="primary">
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontWeight: 700,
                  fontStyle: "italic",
                }}
              >
                We're the new kid on the block
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography variant="body2" paragraph>
                it all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant="body2" paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography variant="body2" paragraph>
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img
            src={history}
            alt="history"
            style={{
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        className={classes.rowContainer}
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4" color="primary" gutterBottom align="center">
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" paragraph align="center">
            Zachary Reece, Founder
          </Typography>
          <Typography variant="body2" paragraph align="center">
            I started coding when I was 9 years old.
          </Typography>
        </Grid>
        <Grid item>
          <Avatar src={profile} className={classes.avatar} />
        </Grid>
      </Grid>
    </Grid>
  );
};
