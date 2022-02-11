import Label from "../Label";
import { Button } from "../../..";
import { Wrapper, GroupLabel } from "./styles";

import GithubIcon from "../../../../assets/images/github-icon.svg";

const CardGithub = () => {
  return (
    <Wrapper>
      <GroupLabel>
        <Label title="Seguidores" value="23" />
        <Label title="Segue" value="8" />
        <Label title="Gists" value="0" />
        <Label title="Repos" value="32" />
      </GroupLabel>

      <Button
        src={GithubIcon}
        alt="Logo do Github"
        size={20}
        value="Ver Github"
      />
    </Wrapper>
  )
}

export default CardGithub;