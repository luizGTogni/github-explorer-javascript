import { createRef, KeyboardEvent, useState } from "react";

import { Icon } from "../";
import { Wrapper } from "./styles";

import MagnifierIcon from "../../assets/images/magnifier-icon.svg";
import useGithub from "../../contexts/hooks/github";

const Search = () => {
  const { getUser } = useGithub();
  const [isFocus, setIsFocus] = useState(false);
  const [username, setUsername] = useState("");
  const inputRef = createRef<HTMLInputElement>();

  const handleFocusInput = () => {
    inputRef.current?.focus();
    setIsFocus(true);
  }

  const handleBlurInput = (event: KeyboardEvent) => {
    if (event.key !== "Enter") return;
    return getUser(username);
  }

  const handleOnChange = () => {
    if (!inputRef.current?.value) return;
    setUsername(inputRef.current.value);
  }

  return (
    <Wrapper onClick={handleFocusInput} isFocus={isFocus}>
      <Icon src={MagnifierIcon} alt="pesquisar" size={16} />
      <input
        type="text"
        ref={inputRef}
        placeholder="Procure usuários do Github"
        onKeyUpCapture={(e) => handleBlurInput(e)}
        onChange={handleOnChange}
        onBlur={() => setIsFocus(false)}
      />
    </Wrapper>
  );
}

export default Search;