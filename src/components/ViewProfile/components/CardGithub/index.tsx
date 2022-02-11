import Label from "../Label";
import { Button } from "../../..";
import { Wrapper, GroupLabel } from "./styles";

import GithubIcon from "../../../../assets/images/github-icon.svg";
import useGithub from "../../../../contexts/hooks/github";

const CardGithub = () => {
  const { githubState } = useGithub();

  const user = githubState.user;

  const handleClickButton = () => {
    window.open(user.html_url, "_blank");
  }

  return (
    <Wrapper>
      <GroupLabel>
        <Label title="Seguidores" value={String(user.followers)} />
        <Label title="Segue" value={String(user.following)} />
        <Label title="Gists" value={String(user.public_gists)} />
        <Label title="Repos" value={String(user.public_repos)} />
      </GroupLabel>

      <Button
        src={GithubIcon}
        alt="Logo do Github"
        size={20}
        value="Ver Github"
        onClick={handleClickButton}
      />
    </Wrapper>
  )
}

export default CardGithub;