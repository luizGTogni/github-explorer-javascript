import { Wrapper } from "./styles";

interface TabProps {
  onClick: () => void;
  title: string;
  currentPage: string;
  nextPage: string;
}

const Tab = ({ onClick, title, currentPage, nextPage }: TabProps) => {
  const isActive = currentPage === nextPage;

  return (
    <Wrapper onClick={onClick} isActive={isActive}>{title}</Wrapper>
  );
}

export default Tab;