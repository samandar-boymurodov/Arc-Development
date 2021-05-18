import { Grid, Typography, useMediaQuery } from '@material-ui/core'
import Lottie from 'react-lottie'
import { makeStyles, useTheme } from '@material-ui/styles'
import { CallToAction } from './UI/CallToAction'

import visionIcon from '../assets/vision.svg'
import techAnimation from '../animations/technologyAnimation/data.json'
import handshake from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'
import review from '../assets/reviewIcon.svg'
import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: techAnimation,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    }
}
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
    }
}))

export const Revolution = function () {
    const classes = useStyles()
    const theme = useTheme()

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"))
    const matchesSM  = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <>
            <Grid
                container
                direction="column"
            >
                <Grid item className={classes.mainContainer}>
                    <Typography
                        variant="h2"
                        color="primary"
                        align={matchesMD ? "center" : "inherit"}
                        style={{
                            fontFamily: "Pacifico"
                        }}>
                        The Revolution
                    </Typography>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    alignItems="center"
                    direction={matchesMD ? "column" : "row"}>
                    <Grid item lg>
                        <img
                            src={visionIcon}
                            alt="visionIcon"
                            style={{
                                maxWidth: matchesSM ? 300 : "40rem",
                                marginRight: matchesMD ? 0 : "5rem",
                                marginBottom: matchesMD ? "5rem" : 0
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        style={{
                            textAlign: !matchesMD ? "right" : "center",
                            maxWidth: '40rem'
                        }}
                        lg>
                        <Grid item>
                            <Typography variant="h4" color="primary">
                                Vision
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" paragraph>
                                The rise of computers, and subsequently the Internet, has completely altered every aspect of human life. This has increased our comfort, broadened our connections, and reshaped how we view the world.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                What once was confined to huge rooms and teams of engineers now resides in every single one of our hands. Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                We want to help businesses capitalize on the latest and greatest technology. The best way to predict the future is to be the one building it, and we want to help guide the world into this next chapter of technological expansion, exploration, and innovation.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                By holding ourselves to rigorous standards and pristine quality, we can ensure you have the absolute best tools necessary to thrive in this new frontier.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                We see a future where every individual has personalized software custom tailored to their lifestyle, culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that goal.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    alignItems="center"
                    direction={matchesMD ? "column" : "row"}>
                    <Grid
                        item
                        container
                        direction="column"
                        style={{
                            textAlign: !matchesMD ? "left" : "center",
                            maxWidth: '40rem'
                        }}
                        lg
                    >
                        <Grid item>
                            <Typography variant="h4" color="primary">
                                Technology
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" paragraph>
                                In 2013, Facebook invented a new way of building websites. This new system, React.js, completely revolutionizes the process and practice of website development.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Instead of chaining together long individual pages, like traditional websites, React websites are built with little chunks of code called components. These components are faster, easier to maintain, and are easily reused and customized, each serving a singular purpose.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. Instead of having to master two completely separate development platforms, you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                Developers have since built on top of these systems by automating project setup and deployment, allowing creators to focus as much as possible on their work itself.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                These technical advancements translate into savings by significantly reducing the workload and streamlining the workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.
                            </Typography>
                            <Typography variant="body2" paragraph>
                                This puts personalization in your pocket — faster, better, and more affordable than ever before.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container justify={matchesMD ? "center" : "flex-end"} lg>
                        <Lottie
                            options={defaultOptions}
                            style={{
                                maxWidth: "40rem",
                                margin: 0
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    style={{
                        marginBottom: "0.75rem"
                    }}
                    justify="center">
                    <Grid item>
                        <Typography variant="h4" color="primary">
                            Process
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    justify={matchesMD ? "center" : undefined}
                    style={{
                        backgroundColor: "#B3B3B3",
                        height: "90rem",
                    }}>
                    <Grid
                        container
                        direction="column"
                        lg
                        style={{
                            maxWidth: "20rem",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}>
                        <Grid item>
                            <Typography 
                                variant="h4" 
                                style={{
                                     color: "#000",
                                     marginTop: "5rem" }}>
                                Consultation
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Our process begins the moment you realize you need a piece of technology for your business. Whether you already have an idea for where to start and what to do, or if you just know you want to step things up, our initial consultation will help you examine your business holistically to find the best solutions.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Detailed notes will be taken on your requirements and constraints, while taking care to identify other potential areas for consideration.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Cutting-edge advancements in machine learning like object detection and natural language processing allow computers to do things previously unimaginable, and our expertise and intuition will help usher you into this new future of possibilities.
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container alignItems="center" justify="center">
                        <img 
                            src={handshake} 
                            alt="handshake" 
                            width="100%" 
                            style={{
                                maxWidth: 600
                            }}
                            />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    justify={matchesMD ? "center" : undefined}
                    style={{
                        backgroundColor: "#FF7373",
                        height: "90rem",
                    }}>
                    <Grid
                        container
                        direction="column"
                        lg
                        style={{
                            maxWidth: "20rem",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}>
                        <Grid item>
                            <Typography 
                                variant="h4" 
                                style={{
                                     color: "#000",
                                     marginTop: "5rem" }}>
                                 Mockup
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalized.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                This helps us understand and refine the solution itself before getting distracted by specifics and looks.
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container alignItems="center" justify="center">
                        <img 
                            src={mockup} 
                            alt="handshake" 
                            width="100%" 
                            style={{
                                maxWidth: 600
                            }}
                            />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    justify={matchesMD ? "center" : undefined}
                    style={{
                        backgroundColor: "#39B54A",
                        height: "90rem",
                    }}>
                    <Grid
                        container
                        direction="column"
                        lg
                        style={{
                            maxWidth: "20rem",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}>
                        <Grid item>
                            <Typography 
                                variant="h4" 
                                style={{
                                     color: "#000",
                                     marginTop: "5rem" }}>
                                 Review
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container alignItems="center" justify="center">
                        <img 
                            src={review} 
                            alt="handshake" 
                            width="100%" 
                            style={{
                                maxWidth: 600
                            }}
                            />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    justify={matchesMD ? "center" : undefined}
                    style={{
                        backgroundColor: "#A67C52",
                        height: "90rem",
                    }}>
                    <Grid
                        container
                        direction="column"
                        lg
                        style={{
                            maxWidth: "20rem",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}>
                        <Grid item>
                            <Typography 
                                variant="h4" 
                                style={{
                                     color: "#000",
                                     marginTop: "5rem" }}>
                                 Design
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container alignItems="center" justify="center">
                        <img 
                            src={design} 
                            alt="handshake" 
                            width="100%" 
                            style={{
                                maxWidth: 600
                            }}
                            />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    justify={matchesMD ? "center" : undefined}
                    style={{
                        backgroundColor: "#39B54A",
                        height: "90rem",
                    }}>
                    <Grid
                        container
                        direction="column"
                        lg
                        style={{
                            maxWidth: "20rem",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}>
                        <Grid item>
                            <Typography 
                                variant="h4" 
                                style={{
                                     color: "#000",
                                     marginTop: "5rem" }}>
                                 Review
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container alignItems="center" justify="center">
                        <img 
                            src={review} 
                            alt="handshake" 
                            width="100%" 
                            style={{
                                maxWidth: 600
                            }}
                            />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    justify={matchesMD ? "center" : undefined}
                    style={{
                        backgroundColor: "#FBB03B",
                        height: "90rem",
                    }}>
                    <Grid
                        container
                        direction="column"
                        lg
                        style={{
                            maxWidth: "20rem",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}>
                        <Grid item>
                            <Typography 
                                variant="h4" 
                                style={{
                                     color: "#000",
                                     marginTop: "5rem" }}>
                                 Build
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container alignItems="center" justify="center">
                        <img 
                            src={build} 
                            alt="handshake" 
                            width="100%" 
                            style={{
                                maxWidth: 600
                            }}
                            />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    justify={matchesMD ? "center" : undefined}
                    style={{
                        backgroundColor: "#C1272D",
                        height: "90rem",
                    }}>
                    <Grid
                        container
                        direction="column"
                        lg
                        style={{
                            maxWidth: "20rem",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}>
                        <Grid item>
                            <Typography 
                                variant="h4" 
                                style={{
                                     color: "#000",
                                     marginTop: "5rem" }}>
                                 Launch
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container alignItems="center" justify="center">
                        <img 
                            src={launch} 
                            alt="handshake" 
                            width="100%" 
                            style={{
                                maxWidth: matchesMD ? 100 : 200
                            }}
                            />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    justify={matchesMD ? "center" : undefined}
                    style={{
                        backgroundColor: "#8E45CE",
                        height: "90rem",
                    }}>
                    <Grid
                        container
                        direction="column"
                        lg
                        style={{
                            maxWidth: "20rem",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}>
                        <Grid item>
                            <Typography 
                                variant="h4" 
                                style={{
                                     color: "#000",
                                     marginTop: "5rem" }}>
                                 Maintain
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container alignItems="center" justify="center">
                        <img 
                            src={maintain} 
                            alt="handshake" 
                            width="100%" 
                            style={{
                                maxWidth: matchesMD ? 300 : 500
                            }}
                            />
                    </Grid>
                </Grid>
                <Grid
                    className={classes.mainContainer}
                    item
                    container
                    justify={matchesMD ? "center" : undefined}
                    style={{
                        backgroundColor: "#29ABE2",
                        height: "90rem",
                    }}>
                    <Grid
                        container
                        direction="column"
                        lg
                        style={{
                            maxWidth: "20rem",
                            textAlign: matchesMD ? "center" : "inherit"
                        }}>
                        <Grid item>
                            <Typography 
                                variant="h4" 
                                style={{
                                     color: "#000",
                                     marginTop: "5rem" }}>
                                 Iterate
                                </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.
                                </Typography>
                            <Typography variant="body2"
                                paragraph
                                style={{ color: "#fff" }}>
                                Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg container alignItems="center" justify="center">
                        <img 
                            src={iterate} 
                            alt="handshake" 
                            width="100%" 
                            style={{
                                maxWidth: 1000
                            }}
                            />
                    </Grid>
                </Grid>
            </Grid>
            
            <CallToAction />
        </>
    )
}