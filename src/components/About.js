import {
  Grid,
  Typography,
  useMediaQuery,
  Avatar,
  Hidden,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";
import history from "../assets/history.svg";

import profile from "../assets/founder.jpg";
import yearBook from "../assets/yearbook.svg";
import puppy from "../assets/puppy.svg";
import { CallToAction } from "./UI/CallToAction.js";

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
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300,
      maxHeight: 300,
    },
  },
  mission: {
    fontWeight: 300,
    fontStyle: "italic",
    maxWidth: "50rem",
    lineHeight: 1.4,
    fontSize: "1.5rem",
  },
  caption: {
    fontSize: "1rem",
    fontWeight: 300,
    color: theme.palette.text.secondary,
  },
}));

export const About = function () {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer}>
        {" "}
        {/* --- About Us Title --- */}
        <Typography
          variant="h2"
          color="primary"
          align={matchesMD ? "center" : undefined}
          style={{
            marginTop: matchesMD ? "1rem" : "2rem",
          }}
        >
          About Us
        </Typography>
      </Grid>
      <Grid item container justify="center" className={classes.rowContainer}>
        {" "}
        {/* --- Mission --- */}
        <Grid item>
          <Typography
            variant="h4"
            align="center"
            color="primary"
            className={classes.mission}
            style={{
              marginTop: "3rem",
            }}
          >
            Whether it be person to person, business to consumer, or an
            individual to their interests, technology is meant to bring us
            closer to what we care about in the best way possible. Arc
            Development will use that principle to provide fast, modern,
            inexpensive, and aesthetic software to the Midwest and beyond.
          </Typography>
        </Grid>
      </Grid>
      {/* --- History --- */}
      <Grid
        item
        container
        className={classes.rowContainer}
        justify="space-around"
        style={{
          marginTop: "10rem",
          marginBottom: "10rem",
        }}
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            style={{
              maxWidth: "35rem",
              textAlign: matchesMD ? "center" : undefined,
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
      {/* --- Team --- */}
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
        <Grid item>
          <Hidden lgUp>
            <Grid
              item
              container
              lg
              style={{ textAlign: "center", padding: "1.25rem" }}
            >
              <Typography variant="body2" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body2">
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed. I'm currently
                teaching a course about building responsive modern user
                interfaces on Udemy.com as well as beginning work on my first
                machine learning mobile application.
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>{" "}
      {/* --- Images --- */}
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{
          marginBottom: "15rem",
        }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
          style={{
            marginBottom: matchesMD ? "2.5rem" : 0,
          }}
        >
          <Grid item>
            <img
              src={yearBook}
              alt="yearBook"
              style={{ maxWidth: matchesMD ? 300 : undefined }}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.caption}>
              a page from my Sophomore yearbook
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid
            item
            container
            lg
            style={{ textAlign: "center", padding: "1.25rem" }}
          >
            <Typography variant="body2" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body2">
              Now I’m ready to apply everything I’ve learned, and to help others
              with the intuition I have developed. I'm currently teaching a
              course about building responsive modern user interfaces on
              Udemy.com as well as beginning work on my first machine learning
              mobile application.
            </Typography>
          </Grid>
        </Hidden>
        <Grid
          item
          container
          direction="column"
          lg
          alignItems="flex-end"
          alignItems={matchesMD ? "center" : "flex-end"}
        >
          <Grid item>
            <img
              src={puppy}
              alt="puppy"
              style={{
                maxWidth: matchesMD ? 300 : undefined,
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.caption}>
              my miniature dapple dachshund, Sterling
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};
