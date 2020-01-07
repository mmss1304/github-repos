import { combineReducers } from "redux";

const initialState = {
  user: "",
  userRepos: {},
  userCommits: {}
};

function data(state = initialState, action) {
  switch (action.type) {
    case "HANDLE_USER": {
      return {
        ...state,
        user: action.user
      };
    }

    case "HANDLE_USER_REPOS": {
      return {
        ...state,
        userRepos: action.data
      };
    }

    case "HANDLE_USER_COMMITS": {
      return {
        ...state,
        userCommits: action.commits
      };
    }

    default:
      return state;
  }
}

export default combineReducers({ data });
