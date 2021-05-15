import Lottie from 'react-lottie'
import animationData from '../animations/landinganimation/data'
import { makeStyles } from '@material-ui/styles'
import ButtonArrow from './UI/ButtonArrow'
import { Button, Grid, Typography, useMediaQuery, Card, CardContent } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { CallToAction } from './UI/CallToAction'
import cusSofDevIcon from '../assets/Custom Software Icon.svg'
import mobileDevIcon from '../assets/mobileIcon.svg'
import websiteDevIcon from '../assets/websiteIcon.svg'
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBack from '../assets/infoBackground.svg'

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
        marginTop: "5rem",
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
        marginTop: "10rem",
        [theme.breakpoints.up("md")]: {
            marginLeft: "5rem",
            marginRight :"5rem"
        }
    },
    icon: {
        [theme.breakpoints.down("sm")]: {
            marginTop: "1.5rem"
        },
        [theme.breakpoints.up("sm")]: {
            marginLeft: "2rem"
        }
    },
    firstBlockText: {
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.7rem",
            paddingRight: "1.7rem"
        }
    },
    revolutionImg: {
        backgroundImage: `url(${revolutionBackground})`,
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    },
    card: {
        position: "absolute",
        borderRadius: 15,
        padding: "10rem",
        [theme.breakpoints.down("sm")]: {
            padding: "8rem 0",
            borderRadius: "0",
            width: "100%"
        },
        boxShadow: theme.shadows[10]
    },
    infoBlockImg: {
        backgroundImage: `url(${infoBack})`,
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
}))
export default function LandingPage() {
    const classes = useStyles()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("sm"))
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"))

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
            <Grid item className={classes.sectionContainer}> {/*---- Services Section ---- */}
                {/* Custom Dev*/}
                 <Grid 
                    item container direction="row" 
                    justify={matches ? "center" : undefined}>
                    <Grid item
                        xs={matches ? 12 : ""}
                        className={classes.firstBlockText}
                        style={{textAlign: matches ? "center" : undefined}}
                        >
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
                    <Grid item>
                        <img src={cusSofDevIcon} alt="icon" className={classes.icon}/>
                    </Grid>
                </Grid>
                {/* Mobile Dev */}
                <Grid 
                    item container direction="row" 
                    justify={matches ? "center" : "flex-end"}
                    style={{marginTop: "15rem"}}
                    >
                    <Grid item
                        xs={matches ? 12 : ""}
                        className={classes.firstBlockText}
                        style={{textAlign: matches ? "center" : undefined}}
                        >
                        <Typography variant="h4" color="primary">
                            IOS/Android App Development
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            color="textSecondary" 
                            style={{marginBottom: "1rem"}}>
                            Extend Functionality, Extend Access, Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Integrate your web experience or create a standalone app with <br />     either mobile platform
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
                    <Grid item>
                        <img src={mobileDevIcon} alt="icon" className={classes.icon}/>
                    </Grid>
                </Grid>
                {/* Website Dev */}
                <Grid 
                    item container direction="row" 
                    justify={matches ? "center" : undefined}
                    style={{marginTop: "15rem"}}
                    >
                    <Grid item
                        xs={matches ? 12 : ""}
                        className={classes.firstBlockText}
                        style={{textAlign: matches ? "center" : undefined}}
                        >
                        <Typography variant="h4" color="primary">
                            Website Development
                        </Typography>
                        <Typography 
                            variant="subtitle1" 
                            color="textSecondary" 
                            style={{marginBottom: "1rem"}}>
                            Reach more, Discover more, Sell more.
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Optimized for Searcg Engines, built for speed.
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
                    <Grid item>
                        <img src={websiteDevIcon} alt="icon" className={classes.icon}/>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid item> {/* --- Revolution block --- */}
                <Grid 
                    container 
                    style={{height: "100rem", marginTop: "12rem"}} 
                    justify="center" alignItems="center">
                        <Card className={classes.card}>
                            <CardContent>
                                <Grid container direction="column" alignItems="center" style={{textAlign: "center"}}>
                                    <Grid item>
                                        <Typography variant="h3" color="primary" gutterBottom>
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            Visionary insights coupled with cutting-edge technology
                                            is recipe for revolution.
                                        </Typography>
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
                            </CardContent>
                        </Card>
                        <div className={classes.revolutionImg}></div>
                </Grid>
            </Grid>

            <Grid item> {/* Contact Us*/}
                <Grid container direction="row" 
                style={{height: "80rem"}}
                alignItems="center">
                    <Grid container
                        direction={matchesXS ? "column" : "row"}
                        style={{position: "absolute"}}>
                        <Grid sm item style={{marginLeft: matchesXS ? "0rem" : "5rem", 
                            textAlign: matchesXS ? "center" : "left"}}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography variant="h2" style={{color: "white"}}>
                                        About Us
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Let's get personal.
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button 
                                        variant="outlined"
                                        className={classes.learnButton}
                                        style={{
                                            color: "white",
                                            borderColor: "white"
                                        }}>
                                        <span style={{marginRight: 10}}>Learn more</span>
                                        <ButtonArrow 
                                            height={10} 
                                            width={10} 
                                            fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm item style={{marginRight: matchesXS ? "0rem" : "5rem", textAlign: matchesXS ? "center" : "right",
                        marginTop: matchesXS ? "10rem": 0}}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Typography variant="h2" style={{color: "white"}}>
                                        Contact Us
                                    </Typography>
                                    <Typography variant="subtitle2">
                                        Say hello! 👋
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Button 
                                        variant="outlined"
                                        className={classes.learnButton}
                                        style={{
                                            color: "white",
                                            borderColor: "white"
                                        }}>
                                        <span style={{marginRight: 10}}>Learn more</span>
                                        <ButtonArrow 
                                            height={10} 
                                            width={10} 
                                            fill="white" />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <div className={classes.infoBlockImg}></div>
                </Grid>
            </Grid>

            <Grid item> {/* Call To Action*/}
                <CallToAction />
            </Grid>
        </Grid>
    )
}