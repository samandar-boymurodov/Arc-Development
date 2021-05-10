
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import logo from '../../assets/logo.svg'

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
        height: "5rem"  
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    }
}))

export default function Header() {
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
                            />
                        <Tabs 
                            
                            className={classes.tabContainer}>
                            <Tab className={classes.tab} label="Home"/>
                            <Tab className={classes.tab} label="Services"/>
                            <Tab className={classes.tab} label="The Revolution"/>
                            <Tab className={classes.tab} label="About Us"/>
                            <Tab className={classes.tab} label="Contact Us"/>
                        </Tabs>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.barMargin}></div>
        </>
    )
}