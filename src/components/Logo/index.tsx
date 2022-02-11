import { Link } from "react-router-dom";

import { Wrapper } from "./styles";

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/"><span>Github</span> explorer</Link>
    </Wrapper>
  );
}

export default Logo;