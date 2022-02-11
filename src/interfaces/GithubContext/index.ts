import GithubState from "../GithubState";

interface GithubContext {
  githubState: GithubState;
  getUser: (username: string) => void;
  getUserRepos: (username: string) => void;
  getUserStarred: (username: string) => void;
}

export default GithubContext;