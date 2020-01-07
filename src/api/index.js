import axios from "axios";

import { handleUserRepos, handleUserCommits } from "../redux/actions";

export const fetchReposUser = (user, dispatch) => {
  axios
    .get(`https://api.github.com/users/${user}/repos`)
    .then(response => dispatch(handleUserRepos(response.data)))
    .catch(error => console.warn(error));
};

export const fetchUserCommits = (location, dispatch) => {
  axios
    .get(`https://api.github.com/repos${location}`)
    .then(response => dispatch(handleUserCommits(response.data)))
    .catch(error => console.warn(error));
};
