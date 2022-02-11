import { useContext } from "react";
import { GithubCtx } from "../../providers/github";

const useGithub = () => {
  const githubCtx = useContext(GithubCtx);

  return githubCtx;
};

export default useGithub;