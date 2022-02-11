import { Wrapper, HLine } from "./styles";
import { Logo, Search } from "../";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Logo />
        <Search />
      </Wrapper>
      <HLine />
    </>
  );
}

export default Header;