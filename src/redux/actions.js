export const handleUser = user => {
  return {
    type: "HANDLE_USER",
    user
  };
};

export const handleUserRepos = data => {
  return {
    type: "HANDLE_USER_REPOS",
    data
  };
};

export const handleUserCommits = commits => {
  return {
    type: "HANDLE_USER_COMMITS",
    commits
  };
};
