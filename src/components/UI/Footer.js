import { makeStyles } from '@material-ui/styles'
import fLogo from '../../assets/Footer Adornment.svg'
import { Grid,Hidden } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Links } from '../Utils/Links'
import { Facebook, Instagram, Twitter } from '@material-ui/icons'

// // icons import
// import facebook from '../../assets/facebook.svg'
// import twitter from '../../assets/twitter.svg'
// import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        zIndex: "1302",
        position: "relative",
        "& img": {
            width: "21rem",
            [theme.breakpoints.down("md")]: {
                width: "20rem",
            },
            [theme.breakpoints.down("sm")]: {
                width: "12rem",
            },

            verticalAlign: "bottom"
        }
    },
    gridContainer: {
        position: "absolute",
        marginTop: "-13rem"
    },
    link: {
        color: "white",
        fontWeight: "bold",
        fontSize: "0.8rem",
        textDecoration: "none",
        fontFamily: theme.typography.fontFamily
    },
    gridItem: {
      margin: "3rem"
    },
    icon: {
        width: "3em",
        height: "3em",
        color: "white",
        [theme.breakpoints.down("xs")]: {
            width: "2em",
            height: "2em",
        }
    },
    iconContainer: {
        position: "absolute",
        marginTop: "-5.5rem",
        right: "1rem",
        [theme.breakpoints.down("xs")]: {
          right: "0.6rem"
        }
    }

}))

export const Footer = ({setTab, setServiceOp}) => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <img src={fLogo} alt="Footer logo" />
            <Hidden smDown>
                <Grid 
                    container 
                    direction="row" 
                    className={classes.gridContainer}
                    justify="center">
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid 
                                item 
                                className={classes.link}
                                component={Link}
                                to={Links.home}
                                onClick={()=> setTab(0)}>
                                Home
                            </Grid>
                        </Grid> 
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid 
                                item 
                                className={classes.link}
                                component={Link}
                                to={Links.services}
                                onClick={()=> setTab(1)}>
                                Services
                            </Grid>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.customsofware}
                                onClick={()=> {setTab(1); setServiceOp(0)}}>
                                Custom Sofware Development
                            </Grid>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.mobiledevelopment}
                                onClick={()=> {setTab(1); setServiceOp(1)}}>
                                Mobile Development
                            </Grid>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.websitedevelopment}
                                onClick={()=> {setTab(1); setServiceOp(2)}}>
                                Web Development
                            </Grid>
                        </Grid> 
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.revolution}
                                onClick={()=> setTab(2)}>
                                The Revolution
                            </Grid>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.revolution}
                                onClick={()=> setTab(2)}>
                                Vision
                            </Grid>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.revolution}
                                onClick={()=> setTab(2)}>
                                Technology
                            </Grid>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.revolution}
                                onClick={()=> setTab(2)}>
                                Process
                            </Grid>
                        </Grid> 
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.about}
                                onClick={()=> setTab(3)}>
                                About Us
                            </Grid>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.about}
                                onClick={()=> setTab(3)}>
                                History
                            </Grid>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.about}
                                onClick={()=> setTab(3)}>
                                Team
                            </Grid>
                        </Grid> 
                    </Grid>
                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2}>
                            <Grid item 
                                className={classes.link}
                                component={Link}
                                to={Links.contact}
                                onClick={()=> setTab(4)}>
                                Contact Us
                            </Grid>
                        </Grid> 
                    </Grid>
                </Grid>
            </Hidden>
            <Grid 
                container 
                justify="flex-end"
                className={classes.iconContainer} 
                spacing={1}>
                <Grid item component={"a"} href="https://facebook.com" target="_blank">
                    <Facebook className={classes.icon}/>
                </Grid>
                <Grid item component={"a"} href="https://twitter.com" target="_blank">
                    <Twitter className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="https://instagram.com" target="_blank">
                    <Instagram className={classes.icon}/>
                </Grid>
            </Grid>
        </footer>
    )
}
