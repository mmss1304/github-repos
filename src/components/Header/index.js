import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import { handleUser } from "../../redux/actions";
import { fetchReposUser } from "../../api/index";

const useStyles = makeStyles(theme => ({
  searchInput: {
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.15)"
  },
  disableEffectLink: {
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "#fff"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const Header = ({ user, dispatch }) => {
  const classes = useStyles();

  const isHome = window.location.pathname === "/";

  return (
    <Grid item xs={12} container justify="space-between">
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.disableEffectLink}>
            <Grid item xs={12}>
              <Typography className={classes.title} variant="h6" noWrap>
                GitHub Repos
              </Typography>
            </Grid>
          </Link>
          {isHome && (
            <Grid item xs={12} container justify="flex-end" alignItems="center">
              <Grid className={classes.searchInput}>
                <IconButton
                  size="small"
                  style={{ color: "#fff" }}
                  onClick={() => fetchReposUser(user, dispatch)}
                >
                  <Grid
                    container
                    justify="center"
                    className={classes.searchIcon}
                  >
                    <SearchIcon />
                  </Grid>
                </IconButton>
                <InputBase
                  placeholder="Search user"
                  onChange={event => dispatch(handleUser(event.target.value))}
                  onKeyDown={event =>
                    event.key === "Enter" ? fetchReposUser(user, dispatch) : ""
                  }
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </Grid>
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default connect(state => ({
  user: state.data.user
}))(Header);
