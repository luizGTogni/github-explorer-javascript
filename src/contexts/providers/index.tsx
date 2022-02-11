import App from "../../App";
import { ResetCSS } from "../../assets/styles/global/resetCSS";
import { GlobalCSS } from "../../assets/styles/global/globalCSS";
import { BrowserRouter } from "react-router-dom"

const Providers = () => {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <App />
    </BrowserRouter>
  );
}

export default Providers;