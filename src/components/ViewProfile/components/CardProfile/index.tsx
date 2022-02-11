import { ImageProfile } from "../../../";
import { Wrapper } from "./styles";

const CardProfile = () => {
  return (
    <Wrapper>
      <div>
        <ImageProfile
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          alt="Foto de Perfil"
        />

        <div className="info-profile">
          <h2>Luiz Gustavo Togni</h2>
          <p className="username">@luizgtogni</p>

          <p className="bio">
            Desenvolvedor Javascript | ReactJS | NodeJS | Fullstack | Frontend...
          </p>
        </div>
      </div>

      <div>
        <p>Empresa: <span>@rocketseat</span></p>
        <p>Localização: <span>Piracicaba, SP</span></p>
        <p>E-mail: <span>contato_togni@outlook.com.br</span></p>
        <p>Blog: <span>www.blogdoluiz.com.br</span></p>
      </div>
    </Wrapper >
  )
}

export default CardProfile;