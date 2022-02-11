import { createContext, ReactNode, useCallback, useState } from "react";
import APIGithub from "../../../adapters/APIGithub";
import { GithubContext } from "../../../interfaces";

export const GithubCtx = createContext<GithubContext>({} as GithubContext);

interface GithubProviderProps {
  children: ReactNode;
}

const GithubProvider = ({ children }: GithubProviderProps) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      id: 0,
      avatar: "",
      email: "",
      bio: "",
      login: "",
      name: "",
      html_url: "",
      blog: "",
      company: "",
      location: "",
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
  });

  const getUser = (username: string) => {
    setGithubState(prevState => ({
      ...prevState,
      loading: !prevState.loading,
    }));


    APIGithub.get(`users/${username}`)
      .then(({ data }) => {
        setGithubState(prevState => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            avatar: data.avatar_url,
            email: data.email,
            bio: data.bio,
            login: data.login,
            name: data.name,
            html_url: data.html_url,
            blog: data.blog,
            company: data.company,
            location: data.location,
            followers: data.followers,
            following: data.following,
            public_gists: data.public_gists,
            public_repos: data.public_repos,
          },
        }));
      }).catch((error) => {
        return;
      })
      .finally(() => {
        setGithubState(prevState => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username: string) => {
    APIGithub.get(`users/${username}/repos`)
      .then(({ data }) => {
        setGithubState(prevState => ({
          ...prevState,
          repositories: data,
        }));
      });
  };

  const getUserStarred = (username: string) => {
    APIGithub.get(`users/${username}/starred`)
      .then(({ data }) => {
        setGithubState(prevState => ({
          ...prevState,
          repositories: data,
        }));
      });
  };

  const ctxValue = {
    githubState,
    getUser: useCallback((username: string) => getUser(username), []),
    getUserRepos: useCallback((username: string) => getUserRepos(username), []),
    getUserStarred: useCallback((username: string) => getUserStarred(username), []),
  };

  return (
    <GithubCtx.Provider value={ctxValue}>
      {children}
    </GithubCtx.Provider>
  );
};

export default GithubProvider;