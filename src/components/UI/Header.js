
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { Link, useHistory } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuItem, 
        useMediaQuery, 
        useTheme,
        SwipeableDrawer,
        IconButton,
        ListItem,
        List,
        ListItemText } from '@material-ui/core'

import logo from '../../assets/logo.svg'
import { Links } from '../Utils/Links'
import { serviceMenuOptions } from '../Utils/serviceMenuOptions'

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
    appBar: {
        zIndex: theme.zIndex.modal+1
    },
    barMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "1rem",
        [theme.breakpoints.down("md")]: {
            marginBottom: "0.1rem"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "0.5rem"
        }
    },
    logo: {
        maxHeight: "5rem",
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            height: "4rem"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 40,
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
    },
    menu: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    iconButton: {
        marginLeft: "auto"
    },
    menuIcon: {
        height: "2.5rem",
        width: "2.5rem"
    },
    drawerPaper: {
        backgroundColor: theme.palette.primary.main
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: "0.7"
    },
    estimate: {
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    drawerSelectedItem: {
        opacity: "1"
    }
}))

export default function Header({tab, setTab, serviceOp, setServiceOp}) {
    const [anchorEl, setAnchorEl] = React.useState()
    const [drawerOpen, setDrawerOpen] = React.useState()

    const history = useHistory()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const changeTabHandler = (e, tabIndex) => {
        setTab(tabIndex)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }
    const serviveHandler = (index) => {
        setTab(1)
        setAnchorEl(null)
        setServiceOp(index)
    }
    React.useEffect(() => {
        console.log(serviceOp, tab)
        switch (history.location.pathname) {
            case Links.home:
                setTab(0)
                break;
            case Links.services:
                setTab(1)
                break;
            case Links.customsofware:
                setServiceOp(1)
                setTab(1)
                break;
            case Links.mobiledevelopment:
                setServiceOp(2)
                setTab(1)
                break;
            case Links.websitedevelopment:
                setServiceOp(3)
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
    }, [setTab, history.location.pathname, serviceOp, setServiceOp, tab])

    const classes = useStyles()

    const routes = [{
            label: "Home",
            link: Links.home
        },
        {
            label: "Services",
            link: Links.services,
            aria_controls: "simple-menu",
            aria_haspopup: "true",
            onMouseMove: handleClick
        },
        {
            label: "The Revolution",
            link: Links.revolution
        },
        {
            label: "About Us",
            link: Links.about
        },
        {
            label: "Contact Us",
            link: Links.contact
        }
    ]

    const tabs = (
        <>
          <Tabs 
            onChange={changeTabHandler}
            value={tab}
            classes={{root: classes.tabContainer}}
            indicatorColor="primary">
            {routes.map((route, index) => (
                <Tab
                    key={index}
                    className={classes.tab}
                    label={route.label}
                    component={Link}
                    to={route.link}
                    aria-controls={route.aria_controls}
                    aria-haspopup={route.aria_haspopup}
                    onMouseMove={route.onMouseMove}
                />
            ))}
        </Tabs>
        <Button 
            variant="contained"
            color="secondary"
            classes={{
                root: classes.button
            }}
            component={Link}
            to={Links.estimate}>
            Free Estimate
        </Button>
        <Menu
            style={{zIndex: "1302"}}
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
                onMouseLeave: handleClose
            }}
            classes={{
                paper: classes.menu
            }}
            elevation={0}
        >
            {serviceMenuOptions.map((option, index) => (
                <MenuItem
                    key={index}
                    component={Link}
                    to={option.link}
                    classes={{root: classes.menuItem}}
                    onClick={() => {
                        serviveHandler(index)
                    }}
                    selected={serviceOp===index && tab===1}
                    >
                    {option.name}
                </MenuItem>
            ))}
            </Menu>
        </>
    )

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
            }

        setDrawerOpen(open)
    };
    const drawer = (
        <React.Fragment>
            <IconButton 
                onClick={toggleDrawer(!drawerOpen)}
                classes={{root: classes.iconButton}}>
                <MenuIcon classes={{root: classes.menuIcon}} />
            </IconButton>
            <SwipeableDrawer
                anchor="left"
                open={!!drawerOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                classes={{paper: classes.drawerPaper}}
            >
                <div className={classes.barMargin}/>
                <List disablePadding>
                    {routes.map((route, index) => (
                        <ListItem
                            key={index}
                            divider button
                            component={Link}
                            to={route.link}
                            onClick={(e) => {setTab(index); setDrawerOpen(false); toggleDrawer(false)(e)}}
                            selected={tab===index}
                            classes={{selected: classes.drawerSelectedItem, root: classes.drawerItem}}
                        >
                            <ListItemText 
                                disableTypography>
                                {route.label}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem 
                        divider button 
                        component={Link} 
                        to={Links.estimate}
                        onClick={(e) => {setTab(5); setDrawerOpen(false); toggleDrawer(false)(e)}}
                        selected={tab===5}
                        classes={{root: classes.estimate}}
                        >
                        <ListItemText disableTypography 
                            className={ tab===5 ? `${classes.drawerItem} ${classes.drawerSelectedItem}` : classes.drawerItem}>
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
        </React.Fragment>
    )
    return(
        <>
            <ElevationScroll>
                <AppBar 
                    classes={{root: classes.appBar}}
                    color="primary">
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
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.barMargin}></div>
        </>
    )
}