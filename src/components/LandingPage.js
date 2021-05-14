import Lottie from 'react-lottie'
import animationData from '../animations/landinganimation/data'
import { makeStyles } from '@material-ui/styles'
import ButtonArrow from './UI/ButtonArrow'
import { Button, Grid, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import cusSofDevIcon from '../assets/Custom Software Icon.svg'

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
    },
    estimate: {
        height: 45,
        width: 145,
        borderRadius: 50,
        marginRight: 40,
        ...theme.typography.estimate,
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    buttonsContainer: {
        marginTop: "1rem"
    },
    learnMoreButton: {
        height: 45,
        width: 145,
        borderRadius: 50,
        color: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        fontFamily: "Roboto",
        borderWidth: 2,
        fontSize: "0.8rem",
        fontWeight: "bold"
    },
    mainContainer: {
        [theme.breakpoints.down("sm")]: {
            marginTop: "2rem"
        }
    },
    heroTextContainer: {
        minWidth: "21.5rem"
    },
    celebration: {
        fontFamily: "Pacifico",
        color: theme.palette.secondary.main
    },
    learnButton: {
        ...theme.typography.learnMoreButton,
        fontSize: "0.7rem",
        height: 35
    },
    sectionContainer: {
        marginTop: "2rem"
    }
}))
export default function LandingPage() {
    const classes = useStyles()
    const theme = useTheme()

    return( 
        <Grid 
            container 
            direction="column"
            className={classes.mainContainer}>
            <Grid item> {/*---- Hero Section ---- */}
                <Grid 
                    container 
                    direction="row" 
                    justify="flex-end"
                    alignItems="center"
                    >
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography 
                            variant="h2" 
                            align="center"
                            color="primary">
                            Bringing West Coast <br />
                            Technology to the Midwest
                        </Typography>
                        <Grid 
                            container 
                            direction="row" 
                            justify="center"
                            className={classes.buttonsContainer}>
                            <Grid item>
                                <Button 
                                    variant="contained"
                                    className={classes.estimate}>
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button 
                                    variant="outlined"
                                    className={classes.learnMoreButton}>    
                                    <span style={{marginRight: 10}}>Learn more</span>
                                    <ButtonArrow 
                                        height={15} 
                                        width={15} 
                                        fill={theme.palette.primary.main} />
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
            <Grid item> {/*---- Services Section ---- */}
                <Grid 
                    item container direction="row" 
                    className={classes.sectionContainer}>
                    <Grid item style={{marginLeft: "2rem"}}>
                        <Typography variant="h4" color="primary">
                            Custom Sofware Development
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            color="textSecondary" 
                            style={{marginBottom: "1rem"}}>
                            Save energy, Save Time, Save Money.
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Complete digital solutions, from investigation to <span className={classes.celebration}>celebration</span>
                        </Typography>
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
                    <Grid>
                        <img src={cusSofDevIcon} alt="icon" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}