import * as React from "react";
import ThemeContext from "./context";
// import { Routes, Route, Link } from "react-router-dom";
function Routes(props) {
  return props.children;
}

function Route(props) {
  const theme = React.useContext(ThemeContext);

  let path = props.path;

  if (props.path.indexOf("/") === -1) {
    path = "/" + path;
  }
  if (path !== theme.path) {
    return null;
  }

  return props.element;
}

function Link(props) {
  const theme = React.useContext(ThemeContext);
  const handClick = () => {
    theme.setPath(props.to);
  };

  return <div onClick={handClick}>{props.children}</div>;
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
