import React from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";

import { fetchUserCommits } from "../../api";

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
    height: 200,
    display: "flex",
    alignItems: "center",
    margin: 10
  },
  textRepos: {
    color: "#4c4a49",
    letterSpacing: 2,
    fontSize: 16
  }
});

const Commit = ({ userCommits, dispatch }) => {
  const classes = useStyles();

  const location = window.location.pathname + window.location.search;

  React.useEffect(() => {
    fetchUserCommits(location, dispatch);
  }, [location]);

  return (
    <React.Fragment>
      {userCommits && userCommits.length ? (
        <Grid item xs={12}>
          <Grid container justify="center">
            <Typography className={classes.titleList}>Commits list</Typography>
          </Grid>
          <Grid item xs={12} container justify="space-around">
            <Grid item xs={12} style={{ display: "contents" }}>
              {userCommits.map(item => (
                <Grid key={item.id} item xs={5}>
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography className={classes.textRepos}>
                        Name author: {item.commit.author.name}
                      </Typography>
                      <Typography className={classes.textRepos}>
                        Message commit: {item.commit.message}
                      </Typography>
                      <Typography className={classes.textRepos}>
                        Date commit: {item.commit.author.date}
                      </Typography>
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
            Commits not found!
          </Typography>
        </Grid>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  userCommits: state.data.userCommits
});

export default connect(mapStateToProps)(Commit);
