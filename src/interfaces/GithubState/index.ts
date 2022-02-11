import Repositories from "../Repositories";
import User from "../User";

interface GithubState {
  hasUser: boolean;
  loading: boolean;
  user: User;
  repositories: Repositories[];
}

export default GithubState;