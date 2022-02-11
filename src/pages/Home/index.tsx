import { Header, ViewProfile, ListCards } from "../../components/";
import useGithub from "../../contexts/hooks/github";
import { Text } from "./styled";


const Home = () => {
  const { githubState } = useGithub();

  return (
    <>
      <Header />
      {githubState.hasUser ? (
        <>
          <ViewProfile />
          <ListCards />
        </>
      ) : (
        <Text>Usuário não encontrado!</Text>
      )}
    </>
  );
}

export default Home;