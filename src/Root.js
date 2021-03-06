import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { MuiThemeProvider } from "@material-ui/core/styles";

import App from "./routes";
import store from "./modules";
// import configure from "store/configure";
// import ColorTheme from "components/common/ColorTheme"; //컬러 테마

const Root = () => {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        {/* <MuiThemeProvider theme={ColorTheme}> */}
          <App />
        {/* </MuiThemeProvider> */}
      </BrowserRouter>
    </Provider>
    </>
  );
};

export default Root;
