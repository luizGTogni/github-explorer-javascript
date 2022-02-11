import { Wrapper, Tabs, Loading } from "./styles";
import { Tab, Cards, Card } from "./components";

import { useEffect, useState } from "react";
import useGithub from "../../contexts/hooks/github";
import { Repositories } from "../../interfaces";

const ListCards = () => {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [page, setPage] = useState("repositories");
  const [repositories, setRepositories] = useState<Repositories[]>([]);

  useEffect(() => {
    if (githubState.user.login) {
      if (page === "repositories") {
        getUserRepos(githubState.user.login);
      } else {
        getUserStarred(githubState.user.login);
      }

      setRepositories(githubState.repositories);
    }
  }, [githubState, getUserRepos, getUserStarred, page]);

  const handleClickTabs = (page: string) => {
    setPage(page);
  }

  return (
    <Wrapper>
      <Tabs>
        <Tab
          onClick={() => handleClickTabs("repositories")}
          title="Repositórios"
          currentPage={page}
          nextPage="repositories"
        />
        <Tab
          onClick={() => handleClickTabs("stars")}
          title="My Stars"
          currentPage={page}
          nextPage="stars"
        />
      </Tabs>

      <Cards>
        {githubState.loading ? (
          <Loading>Carregando...</Loading>
        ) : (
          repositories ? repositories.map(repository => (
            <Card key={repository.name} data={repository} />
          )) : (<Loading>Carregando...</Loading>)
        )}
      </Cards>
    </Wrapper>
  );
}

export default ListCards;