import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { Link, useHistory } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import {
  MenuItem,
  useMediaQuery,
  useTheme,
  SwipeableDrawer,
  IconButton,
  ListItem,
  List,
  ListItemText,
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMore from "@material-ui/icons/ExpandMore";
import logo from "../../assets/logo.svg";
import { Links } from "../Utils/Links";
import { serviceMenuOptions } from "../Utils/serviceMenuOptions";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  expanded: {
    backgroundColor: theme.palette.primary.main,
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    "&.Mui-expanded": {
      margin: 0,
    },
    "&:before": {
      backgroundColor: "transparent",
    },
  },
  exSummary: {
    "&:hover": {
      backgroundColor: "rgb(0, 0, 0, 0.04)",
    },
  },
  expansioDetails: {
    padding: 0,
    paddingLeft: "16px",
  },
  barMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "0.1rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.5rem",
    },
  },
  logo: {
    maxHeight: "5rem",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      height: "4rem",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 40,
    marginLeft: "25px",
  },
  button: {
    marginLeft: "50px",
    marginRight: "50px",
    borderRadius: "50px",
    fontFamily: "Pacifico",
    textTransform: "none",
    height: "45px",
    fontSize: "1rem",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "0px",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  iconButton: {
    marginLeft: "auto",
  },
  menuIcon: {
    height: "2.5rem",
    width: "2.5rem",
  },
  drawerPaper: {
    backgroundColor: theme.palette.primary.main,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: "0.7",
  },
  estimate: {
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  drawerSelectedItem: {
    opacity: "1",
  },
}));

export default function Header({ tab, setTab, serviceOp, setServiceOp }) {
  const [anchorEl, setAnchorEl] = React.useState();
  const [drawerOpen, setDrawerOpen] = React.useState();

  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const changeTabHandler = (e, tabIndex) => {
    setTab(tabIndex);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const serviveHandler = (index) => {
    setTab(1);
    setAnchorEl(null);
    setServiceOp(index);
  };
  React.useEffect(() => {
    switch (history.location.pathname) {
      case Links.home:
        setTab(0);
        break;
      case Links.services:
        setTab(1);
        break;
      case Links.customsofware:
        setServiceOp(1);
        setTab(1);
        break;
      case Links.mobiledevelopment:
        setServiceOp(2);
        setTab(1);
        break;
      case Links.websitedevelopment:
        setServiceOp(3);
        setTab(1);
        break;
      case Links.revolution:
        setTab(2);
        break;
      case Links.about:
        setTab(3);
        break;
      case Links.contact:
        setTab(4);
        break;
      case Links.estimate:
        setTab(5);
        break;
      default:
        break;
    }
  }, [setTab, history.location.pathname, serviceOp, setServiceOp, tab]);

  const classes = useStyles(tab);

  const routes = [
    {
      label: "Home",
      link: Links.home,
    },
    {
      label: "Services",
      link: Links.services,
      aria_controls: "simple-menu",
      aria_haspopup: "true",
      onMouseMove: handleClick,
    },
    {
      label: "The Revolution",
      link: Links.revolution,
    },
    {
      label: "About Us",
      link: Links.about,
    },
    {
      label: "Contact Us",
      link: Links.contact,
    },
  ];

  const tabs = (
    <>
      <Tabs
        onChange={changeTabHandler}
        value={tab}
        classes={{ root: classes.tabContainer }}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={route.label + " " + index}
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
          root: classes.button,
        }}
        component={Link}
        to={Links.estimate}
      >
        Free Estimate
      </Button>
      <Menu
        style={{ zIndex: "1302" }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          onMouseLeave: handleClose,
        }}
        classes={{
          paper: classes.menu,
        }}
        elevation={0}
      >
        {serviceMenuOptions.map((option, index) => (
          <MenuItem
            key={index}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={() => {
              serviveHandler(index);
            }}
            selected={serviceOp === index && tab === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };
  const drawer = (
    <React.Fragment>
      <IconButton
        onClick={toggleDrawer(!drawerOpen)}
        classes={{ root: classes.iconButton }}
      >
        <MenuIcon classes={{ root: classes.menuIcon }} />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={!!drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.barMargin} />
        <List disablePadding>
          {routes.map((route, index) =>
            route.label === "Services" ? (
              <ExpansionPanel
                elevation={0}
                classes={{ root: classes.expanded }}
                key={route.label + " " + index * 5}
              >
                <ExpansionPanelSummary
                  style={{
                    backgroundColor:
                      tab == 1 ? "rgba(0, 0, 0, 0.08)" : undefined,
                  }}
                  className={classes.exSummary}
                  expandIcon={<ExpandMore color="secondary" />}
                >
                  <ListItemText
                    onClick={(e) => {
                      setTab(1);
                      setDrawerOpen(false);
                      setServiceOp(0);
                      toggleDrawer(false)(e);
                    }}
                    className={classes.drawerItem}
                    style={{ opacity: tab === 1 ? 1 : undefined }}
                    disableTypography
                  >
                    <Link
                      to={route.link}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {route.label}
                    </Link>
                  </ListItemText>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  classes={{ root: classes.expansioDetails }}
                >
                  <Grid container direction="column">
                    {[
                      ...serviceMenuOptions.slice(1, serviceMenuOptions.length),
                    ].map((option, index) => (
                      <Grid item key={option.name}>
                        <ListItem
                          divider={
                            option.name === "Website Development" ? false : true
                          }
                          button
                          component={Link}
                          to={option.link}
                          onClick={(e) => {
                            setServiceOp(index + 1);
                            setDrawerOpen(false);
                            toggleDrawer(false)(e);
                          }}
                          selected={serviceOp === index + 1 && tab === 1}
                          classes={{
                            selected: classes.drawerSelectedItem,
                            root: classes.drawerItem,
                          }}
                        >
                          <ListItemText disableTypography>
                            {option.name
                              .split(" ")
                              .filter((word) => word !== "Development")
                              .join(" ")}
                            <br />
                            <span style={{ fontSize: "0.75rem" }}>
                              Development
                            </span>
                          </ListItemText>
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ) : (
              <ListItem
                key={index}
                divider
                button
                component={Link}
                to={route.link}
                onClick={(e) => {
                  setTab(index);
                  setDrawerOpen(false);
                  toggleDrawer(false)(e);
                }}
                selected={tab === index}
                classes={{
                  selected: classes.drawerSelectedItem,
                  root: classes.drawerItem,
                }}
              >
                <ListItemText disableTypography>{route.label}</ListItemText>
              </ListItem>
            )
          )}
          <ListItem
            divider
            button
            component={Link}
            to={Links.estimate}
            onClick={(e) => {
              setTab(5);
              setDrawerOpen(false);
              toggleDrawer(false)(e);
            }}
            selected={tab === 5}
            classes={{ root: classes.estimate }}
          >
            <ListItemText
              disableTypography
              className={
                tab === 5
                  ? `${classes.drawerItem} ${classes.drawerSelectedItem}`
                  : classes.drawerItem
              }
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar classes={{ root: classes.appBar }} color="primary">
          <Toolbar disableGutters>
            <svg
              className={classes.logo}
              onClick={() => {
                history.push("/");
                setTab(0);
              }}
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 480 139"
            >
              <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 100;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
              <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
              <path className="st0" d="M-1 139h479.92v.01H-1z" />
              <text
                transform="translate(261.994 65.233)"
                className="st1 st2"
                fontSize="57"
              >
                Arc
              </text>
              <text
                transform="translate(17.692 112.015)"
                className="st1 st2"
                fontSize="54"
              >
                Development
              </text>
              <path
                className="st0"
                d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"
              />
              <path
                d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                fill="#0b72b9"
              />
              <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
              <g id="Group_186" transform="translate(30.153 11.413)">
                <g id="Group_185">
                  <g id="Words">
                    <path
                      id="Path_59"
                      className="st1"
                      d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"
                    />
                  </g>
                </g>
              </g>
              <path
                className="st0"
                d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"
              />
            </svg>

            <Hidden mdDown>{tabs}</Hidden>
            <Hidden lgUp>{drawer}</Hidden>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.barMargin}></div>
    </>
  );
}
