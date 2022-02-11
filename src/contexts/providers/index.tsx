import App from "../../App";
import { ResetCSS } from "../../assets/styles/global/resetCSS";
import { GlobalCSS } from "../../assets/styles/global/globalCSS";
import { BrowserRouter } from "react-router-dom"
import GithubProvider from "./github";

const Providers = () => {
  return (
    <BrowserRouter>
      <GithubProvider>
        <ResetCSS />
        <GlobalCSS />
        <App />
      </GithubProvider>
    </BrowserRouter>
  );
}

export default Providers;