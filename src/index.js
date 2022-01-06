import * as React from "react";
import * as ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeContext from "./context";

function BrowserRouter(props) {
  const [path, setPath] = React.useState(window.location.pathname);
  React.useEffect(() => {
    window.history.pushState({}, "", path);
  }, [path]);
  return (
    <ThemeContext.Provider value={{ path, setPath }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
