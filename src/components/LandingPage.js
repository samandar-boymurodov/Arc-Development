import Lottie from 'react-lottie'
import animationData from '../animations/landinganimation/data'
import { makeStyles } from '@material-ui/styles'
import ButtonArrow from './UI/ButtonArrow'
import { Button, Grid, Typography } from '@material-ui/core'

const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: "50rem",
        minWidth: "21rem",
        marginTop: "2rem",
        marginLeft: "10%"
    }
}))
export default function LandingPage() {
    const classes = useStyles()
    return( 
        <Grid container direction="column">
            <Grid item>
                <Grid 
                    container 
                    direction="row" 
                    justify="flex-end"
                    alignItems="center"
                    >
                    <Grid sm item>
                        <Typography 
                            variant="h2" 
                            align="center"
                            color="primary">
                            Bringing West Coast <br />
                            Technology to the Midwest
                        </Typography>
                        <Grid container direction="row" justify="center">
                            <Grid item>
                                <Button variant="contained">
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined">    
                                    Learn more
                                    <ButtonArrow height={15} width={15} fill="blue"/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie 
                            options={defaultOptions}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}