import { makeStyles, useTheme } from '@material-ui/styles'
import { Button, Grid, Typography } from '@material-ui/core'
import ButtonArrow from './ButtonArrow'

const useClasses = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnMoreButton,
        fontSize: "0.7rem",
        height: 35
    }
}))

export const CallToAction = function () {
    const classes = useClasses()
    const theme = useTheme()

    return (
        <Grid container>
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h2" color="primary">
                            Simple Software. <br /> Revolutionary Results.
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="subtitle2">
                            Take advantage of 21st Century.
                        </Typography>
                    </Grid>
                    <Grid>
                        <Button 
                            variant="outlined"
                            className={classes.learnButton}>
                            <span style={{marginRight: 10}}>Learn more</span>
                            <ButtonArrow 
                                height={10} 
                                width={10} 
                                fill={theme.palette.primary.main} />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}