import { Wrapper } from "./styles";
import { CardProfile, CardGithub } from "./components";

const ViewProfile = () => {
  return (
    <Wrapper>
      <CardProfile />
      <CardGithub />
    </Wrapper>
  )
}

export default ViewProfile;