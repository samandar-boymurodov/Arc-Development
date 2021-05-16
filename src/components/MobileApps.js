import Lottie from 'react-lottie'
import { Grid, Typography, Button, Hidden, useMediaQuery, IconButton } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";

const useStyles = makeStyles(theme => ({
    arrow: {
        marginTop: "0.5rem",
      },
      textContainer: {
        maxWidth: "40em",
      }
}))

export const MobileApps = function() {
    const classes = useStyles()
    const theme = useTheme()

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    return(
        <Grid container direction="column">
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
        </Grid>
    )
}