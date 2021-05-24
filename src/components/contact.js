import { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  useMediaQuery,
  Button,
  Dialog,
  DialogContent,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

import backImg from "../assets/background.jpg";
import mobileBackImg from "../assets/mobileBackground.jpg";
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
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackImg})`,
    },
  },
  errorMessage: {
    marginBottom: "-1.5rem",
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
    [theme.breakpoints.down("md")]: {
      marginRight: 0,
    },
  },
  learnButton: {
    ...theme.typography.learnMoreButton,
    fontSize: "0.7rem",
    height: 35,
  },
  callContainer: {
    marginLeft: "3rem",
    [theme.breakpoints.down("md")]: {
      marginLeft: "1.5rem",
      marginRight: "1.5rem",
    },
  },
  textArea: {
    border: "2px solid #1769aa",
    borderRadius: 5,
    padding: 5,
    marginTop: "5rem",
  },
  textAreaError: {
    border: "2px solid #f44336",
    borderRadius: 5,
    padding: 5,
    marginTop: "5rem",
  },
  sendButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
    borderRadius: 50,
    width: 245,
    height: 45,
  },
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup.string("Enter your name").required("Name is required"),
  message: yup.string("Enter a message").required("Message is required"),
  phone: yup
    .string("Enter your Phone Number")
    .matches(/^\+?[0-9]{3}-?[0-9]{6,12}$/, "Phone Number is not valid")
    .required("Phone Number is required"),
});

export const Contact = function () {
  const theme = useTheme();
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = useState(false);

  const sendMessage = (values) => {
    console.log(JSON.stringify(values));
    const url = "https://material-ui-arc-dev-default-rtdb.firebaseio.com/";
    axios
      .post(`${url}messages.json`, JSON.stringify(values))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      message: "",
      name: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setOpen(true);
      if (open) {
        sendMessage(values);
      }
    },
  });
  return (
    <Grid container>
      <Grid
        item
        container
        direction="column"
        lg={4}
        xl={3}
        alignItems="center"
        style={{
          marginTop: matchesMD ? "1rem" : "5rem",
          marginBottom: matchesMD ? "1rem" : "5rem",
        }}
      >
        {/*--- Form ---*/}
        <Grid item>
          <Grid item>
            <Typography
              variant="h2"
              color="primary"
              align={matchesMD ? "center" : undefined}
              style={{
                lineHeight: 1,
              }}
            >
              Contact Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : undefined}
              variant="body2"
              style={{ color: theme.palette.primary.main }}
            >
              We're waiting.
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <Grid
              item
              container
              style={{
                marginTop: "2rem",
              }}
            >
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
                  <a
                    href="tel:+99897 888 15 10"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    +99897 888 15 10
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              style={{
                marginBottom: "2rem",
              }}
            >
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
                  <a
                    href="mailto:boymurodovuzcoder@gmail.com"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    boymurodovuzcoder@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/*--- Inputs & Button --- */}
          <Grid
            component="form"
            onSubmit={formik.handleSubmit}
            item
            container
            style={{ maxWidth: "20rem" }}
            direction="column"
          >
            <Grid item>
              <TextField
                label="Name"
                style={{
                  marginBottom: "0.5rem",
                }}
                id="name"
                name="name"
                autoComplete="off"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                style={{
                  marginBottom: "0.5rem",
                }}
                label="Email"
                fullWidth
                autoComplete="off"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item>
              <TextField
                label="Phone"
                style={{
                  marginBottom: "0.5rem",
                }}
                autoComplete="off"
                id="phone"
                name="phone"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
            <Grid item>
              <TextField
                rows={10}
                multiline
                fullWidth
                id="message"
                name="message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root:
                      formik.touched.message && formik.errors.message
                        ? classes.textAreaError
                        : classes.textArea,
                  },
                }}
                FormHelperTextProps={{
                  classes: { root: classes.errorMessage },
                }}
              />
            </Grid>
            <Grid
              item
              container
              justify="center"
              style={{
                marginTop: "2rem",
              }}
            >
              <Button
                variant="contained"
                className={classes.sendButton}
                type="submit"
              >
                Send Message
                <img
                  src={sendIcon}
                  alt="sendIcon"
                  style={{ marginLeft: "1rem" }}
                />
              </Button>
            </Grid>
            {/*---Dialog---*/}
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              fullScreen={matchesXS}
              style={{
                zIndex: 1302,
              }}
              PaperProps={{
                style: {
                  paddingLeft: matchesXS
                    ? 0
                    : matchesSM
                    ? "5rem"
                    : matchesMD
                    ? "10rem"
                    : "20rem",
                  paddingRight: matchesXS
                    ? 0
                    : matchesSM
                    ? "5rem"
                    : matchesMD
                    ? "10rem"
                    : "20rem",
                  paddingTop: matchesXS ? 0 : matchesMD ? "2rem" : "5rem",
                  paddingBottom: matchesXS ? 0 : matchesMD ? "2rem" : "5rem",
                },
              }}
            >
              <DialogContent>
                <Grid
                  container
                  direction="column"
                  component="form"
                  onSubmit={formik.handleSubmit}
                >
                  <Grid item>
                    <Typography
                      variant="h4"
                      color="primary"
                      gutterBottom
                      align="center"
                    >
                      Confirm Message
                    </Typography>
                  </Grid>
                  <Grid item container direction="column">
                    <Grid item>
                      <TextField
                        label="Name"
                        style={{
                          marginBottom: "0.5rem",
                        }}
                        id="name2"
                        name="name"
                        autoComplete="off"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        style={{
                          marginBottom: "0.5rem",
                        }}
                        label="Email"
                        fullWidth
                        autoComplete="off"
                        id="email2"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Phone"
                        style={{
                          marginBottom: "0.5rem",
                        }}
                        autoComplete="off"
                        id="phone2"
                        name="phone"
                        fullWidth
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.phone && Boolean(formik.errors.phone)
                        }
                        helperText={formik.touched.phone && formik.errors.phone}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        rows={10}
                        multiline
                        fullWidth
                        id="message2"
                        name="message"
                        name="message"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.message &&
                          Boolean(formik.errors.message)
                        }
                        helperText={
                          formik.touched.message && formik.errors.message
                        }
                        InputProps={{
                          disableUnderline: true,
                          classes: {
                            root:
                              formik.touched.message && formik.errors.message
                                ? classes.textAreaError
                                : classes.textArea,
                          },
                        }}
                        FormHelperTextProps={{
                          classes: { root: classes.errorMessage },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    direction={matchesXS ? "row" : matchesSM ? "column" : "row"}
                    style={{
                      marginTop: "2rem",
                      fontWeight: 300,
                    }}
                    justify={matchesXS ? "space-around" : undefined}
                    alignItems="center"
                  >
                    <Grid item>
                      <Button color="primary" onClick={() => setOpen(false)}>
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        className={classes.sendButton}
                        type="submit"
                      >
                        Send Message
                        <img
                          src={sendIcon}
                          alt="sendIcon"
                          style={{ marginLeft: "1rem" }}
                        />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
        className={classes.estimateBg}
        alignItems="center"
      >
        {/*--- Call to Action --- */}
        <Grid
          item
          style={{
            textAlign: matchesMD ? "center" : undefined,
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
            style={{ marginTop: matchesMD ? "2.5rem" : 0 }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
