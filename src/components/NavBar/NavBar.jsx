import React, { useContext } from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { UserContext } from "../../providers/UserProvider";
import { signOut } from "../../firebase";
import Button from "@material-ui/core/Button";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { theme } from "../../theme";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "white",
    hover: {
      color: "white"
    }
  }
};

function NoUserNavBar(props) {
  const { classes } = props;
  const user = useContext(UserContext);
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className={classes.link}>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <HomeIcon />
              </IconButton>
            </Link>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {user ? `Welcome ${user.displayName}` : "Prisoner Skills"}
            </Typography>
            {!user && <SignIn />}
            {!user && <SignUp />}
            {user && (
              <Button color="inherit" onClick={signOut}>
                Sign Out
              </Button>
            )}
            {user && (
              <Link to="/prisoner-posts/:id" className={classes.link}>
                <PersonIcon />
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

NoUserNavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NoUserNavBar);
