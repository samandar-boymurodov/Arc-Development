
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { Link, useHistory } from 'react-router-dom'

import logo from '../../assets/logo.svg'
import { Links } from '../Utils/Links'

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
    barMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "1.5rem"
    },
    logo: {
        height: "5rem",
        cursor: "pointer"  
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        marginLeft: "50px",
        marginRight: "50px",
        borderRadius: "50px",
        fontFamily: "Pacifico",
        textTransform: "none",
        height: "45px",
        fontSize: "1rem",
        color: "white"
    }
}))

export default function Header() {
    const [tab, setTab] = React.useState(0)
    const history = useHistory()

    const changeTabHandler = (e, tabIndex) => {
        setTab(tabIndex)
    }

    React.useEffect(() => {
        console.log(history.location.pathname)
        switch (history.location.pathname) {
            case Links.home:
                setTab(0)
                break;
            case Links.services:
                setTab(1)
                break;
            case Links.revolution:
                setTab(2)
                break;
            case Links.about:
                setTab(3)
                break;
            case Links.contact:
                setTab(4)
                break;
            case Links.estimate:
                setTab(5)
                break;
            default:
                break;
        }
    }, [setTab, history.location.pathname])

    const classes = useStyles()
    return(
        <>
            <ElevationScroll>
                <AppBar color="primary">
                    <Toolbar disableGutters>
                        <img 
                            src={logo}
                            alt="Company Logo" 
                            className={classes.logo}
                            onClick={() => {
                                history.push("/")
                                setTab(0)
                            }}
                            />
                        <Tabs 
                            onChange={changeTabHandler}
                            value={tab}
                            className={classes.tabContainer}
                            indicatorColor="primary">
                            <Tab 
                                className={classes.tab} 
                                label="Home"
                                component={Link}
                                to={Links.home}
                                />
                            <Tab 
                                className={classes.tab} 
                                label="Services"
                                component={Link}
                                to={Links.services}
                                />
                            <Tab 
                                className={classes.tab} 
                                label="The Revolution"
                                component={Link}
                                to={Links.revolution}
                                />
                            <Tab 
                                className={classes.tab} 
                                label="About Us"
                                component={Link}
                                to={Links.about}
                                />
                            <Tab 
                                className={classes.tab} 
                                label="Contact Us"
                                component={Link}
                                to={Links.contact}
                                />
                            <Tab 
                                className={classes.tab} 
                                label="Contact Us"
                                component={Link}
                                to={Links.contact}
                                />
                        </Tabs>
                        <Button 
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            component={Link}
                            to={Links.estimate}>
                            Free Estimate
                        </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.barMargin}></div>
        </>
    )
}