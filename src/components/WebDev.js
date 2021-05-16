import { Grid, Typography, IconButton, useMediaQuery, Hidden } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        paddingLeft: "5rem",
        paddingRight: "5rem",
        paddingTop: "1rem",
        paddingBottom: "10rem",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }
    },
    arrow: {
        marginTop: "0.5rem",
      },
    textContainer: {
        maxWidth: "40em",
    }
}))

export const WebDev = function() {
    const classes = useStyles()
    const theme = useTheme()

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    return(
        <Grid 
            container 
            direction="column"
            className={classes.mainContainer}>
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
                    Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
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
        </Grid>
    )
}