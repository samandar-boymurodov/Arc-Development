import { makeStyles } from '@material-ui/styles'
import { Theme } from './Theme'
import fLogo from '../../assets/Footer Adornment.svg'

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        zIndex: "1302",
        position: "relative",
        "& img": {
            width: "24rem",
            [theme.breakpoints.down("md")]: {
                width: "22rem",
            },
            [theme.breakpoints.down("sm")]: {
                width: "12rem",
            },

            verticalAlign: "bottom"
        }
    }

}))

export const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <img src={fLogo} alt="Footer logo" />
        </footer>
    )
}
