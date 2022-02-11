import { ImageProfile } from "../../../";
import useGithub from "../../../../contexts/hooks/github";
import { Wrapper } from "./styles";

const CardProfile = () => {
  const { githubState } = useGithub();

  const user = githubState.user;

  return (
    <Wrapper>
      <div>
        <ImageProfile
          src={user.avatar}
          alt="Foto de Perfil"
        />

        <div className="info-profile">
          <h2>{user.name}</h2>
          <p className="username">@{user.login}</p>

          <p className="bio">
            {user.bio}
          </p>
        </div>
      </div>

      <div>
        {user.company && <p>Empresa: <span>{user.company}</span></p>}
        {user.location && <p>Localização: <span>{user.location}</span></p>}
        {user.email && <p>E-mail: <span>{user.email}</span></p>}
        {user.blog && <p>Blog: <span>{user.blog}</span></p>}
      </div>
    </Wrapper >
  )
}

export default CardProfile;