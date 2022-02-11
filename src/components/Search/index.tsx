import { createRef, useState } from "react";

import { Icon } from "../";
import { Wrapper } from "./styles";

import MagnifierIcon from "../../assets/images/magnifier-icon.svg";

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = createRef<HTMLInputElement>();

  const focusTextInput = () => {
    inputRef.current?.focus();
    setIsFocus(true);
  }

  return (
    <Wrapper onClick={focusTextInput} isFocus={isFocus}>
      <Icon src={MagnifierIcon} alt="pesquisar" size={16} />
      <input
        type="text"
        ref={inputRef}
        placeholder="Procure usuários do Github"
        onBlur={() => setIsFocus(false)}
      />
    </Wrapper>
  );
}

export default Search;