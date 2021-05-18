import { Grid, Typography, Avatar, useMediaQuery } from '@material-ui/core'
import { useTheme, makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    mission: {
        fontWeight: 300,
        fontStyle: "italic",
        maxWidth: "50rem",
        lineHeight: 1.4,
        fontSize: "1.5rem"
    }
}))

export const About = function () {
    const classes = useStyles()

    return(
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h2" color="primary">
                    About Us
                </Typography>
            </Grid>
            <Grid item container justify="center">
                <Grid 
                    item
                    >
                    <Typography 
                        variant="h4"
                        align="center"
                        color="primary"
                        className={classes.mission}>
                        Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast, modern, inexpensive, and aesthetic software to the Midwest and beyond.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}
