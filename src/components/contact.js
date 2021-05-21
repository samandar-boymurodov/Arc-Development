import { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

import backImg from "../assets/background.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import sendIcon from "../assets/send.svg";
import ButtonArrow from "./UI/ButtonArrow.js";

const useStyles = makeStyles((theme) => ({
  estimateBg: {
    backgroundImage: `url(${backImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "60rem",
    backgroundRepeat: "no-repeat",
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
  learnButton: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.7rem",
    height: 35,
  },
  callContainer: {
    marginLeft: "5rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
    },
  },
}));

export const Contact = function () {
  const theme = useTheme();
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Grid container>
      <Grid item container direction="column" lg={3}>
        {/*--- Form ---*/}
        <Grid item>
          <Typography variant="h2" color="primary">
            Contact Us
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body2"
            style={{ color: theme.palette.primary.main }}
          >
            We're waiting.
          </Typography>
        </Grid>
        <Grid item container direction="column">
          <Grid item container>
            <Grid item>
              <img
                src={phoneIcon}
                alt="phone"
                style={{
                  marginRight: "0.5rem",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="primary"
                style={{ fontSize: "1rem" }}
              >
                +99897 888 15 10
              </Typography>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item>
              <img
                src={emailIcon}
                alt="email"
                style={{
                  marginRight: "0.5rem",
                  verticalAlign: "middle",
                }}
              />
            </Grid>
            <Grid item>
              <Typography
                style={{ fontSize: "1rem" }}
                variant="body2"
                color="primary"
              >
                boymurodovuzcoder@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/*--- Inputs & Button --- */}
        <Grid item container>
          <Grid item>
            <TextField
              label="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              rows={10}
              multiline
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button variant="contained">
              Send Message
              <img src={sendIcon} alt="sendIcon" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        lg={9}
        className={classes.estimateBg}
        alignItems="center"
      >
        {/*--- Call to Action --- */}
        <Grid
          item
          style={{
            textAlign: matchesSM ? "center" : undefined,
          }}
          className={classes.callContainer}
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
        <Grid item className={classes.callContainer}>
          <Button
            variant="contained"
            className={classes.estimate}
            style={{ marginTop: matchesSM ? "2.5rem" : 0 }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
