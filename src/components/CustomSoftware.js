import { makeStyles, useTheme } from '@material-ui/styles'
import { Grid, Typography, IconButton, useMediaQuery } from '@material-ui/core'

import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import bulb from '../assets/bulb.svg'
import cash from '../assets/cash.svg'
import stopwatch from '../assets/stopwatch.svg'

const useStyles = makeStyles(theme => ({
    textContainer: {
        maxWidth: "40em"
    },
    mainContainer: {
        paddingLeft: "5rem",
        paddingRight: "5rem",
        paddingTop: "1rem",
        paddingBottom: "10rem"
    },
    arrow: {
        marginTop: "0.5rem"
    }
}))

export const CustomSofware = function() {
    const classes = useStyles()
    const theme = useTheme()

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

    return(
        <Grid 
            container 
            direction="column"
            className={classes.mainContainer}>
            <Grid item container>
                <Grid item className={classes.arrow}>
                    <IconButton>
                        <img src={backArrow} alt="backArrow" />
                    </IconButton>
                </Grid>
                <Grid item className={classes.textContainer}>
                    <Typography variant="h2" color="primary">
                        Custom Software Development
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
                    </Typography>
                    <Typography variant="body2" paragraph>
                        Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                    </Typography>
                    <Typography variant="body2" paragraph>
                          We create exactly what you what, exactly how you want it.
                    </Typography>
                </Grid>
                <Grid item  className={classes.arrow}>
                    <IconButton>
                            <img src={forwardArrow} alt="forwardArrow" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction="row" style={{
                marginTop: "15rem",
                marginBottom: "20rem"
            }}
            spacing={matchesMD ? 10 : 0}>
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
                <Grid item container md direction="column" alignItems="center">
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
        </Grid>
    )
}