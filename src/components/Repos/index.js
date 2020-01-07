import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  titleList: {
    margin: 25,
    fontSize: 30,
    letterSpacing: 5,
    color: "#4c4a49"
  },
  notFound: {
    fontSize: 30,
    letterSpacing: 5,
    color: "#4c4a49"
  },
  card: {
    height: 160,
    display: "flex",
    alignItems: "center",
    margin: 10
  },
  disableEffectLink: {
    textDecoration: "none"
  },
  buttonCommits: {
    margin: "10px 0px"
  },
  textRepos: {
    color: "#4c4a49",
    letterSpacing: 2,
    fontSize: 16
  }
});

const Repos = ({ userRepos }) => {
  const classes = useStyles();

  return (
    <Grid>
      {userRepos && userRepos.length ? (
        <Grid item xs={12}>
          <Grid container justify="center">
            <Typography className={classes.titleList}>
              Repository list
            </Typography>
          </Grid>
          <Grid item xs={12} container justify="space-around">
            <Grid item xs={12} style={{ display: "contents" }}>
              {userRepos.map(item => (
                <Grid key={item.id} item xs={5}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography className={classes.textRepos}>
                        Name repository: {item.name}
                      </Typography>
                      <Typography className={classes.textRepos}>
                        Link repository: {item.url}
                      </Typography>
                      <Link
                        to={`${item.full_name}/commits?&per_page=20`}
                        className={classes.disableEffectLink}
                      >
                        <Button
                          className={classes.buttonCommits}
                          variant="outlined"
                          color="primary"
                        >
                          See commits
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          xs={12}
          container
          justify="center"
          alignItems="center"
          style={{ height: "80vh" }}
        >
          <Typography className={classes.notFound}>
            Repository not found!
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = state => ({
  userRepos: state.data.userRepos
});

export default connect(mapStateToProps)(Repos);
