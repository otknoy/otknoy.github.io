import React from "react";
import ReactDOM from "react-dom";

import Header from './Header.jsx';
import Profile from './Profile.jsx';
import Articles from './Articles.jsx';
import Footer from './Footer.jsx';

const App = () => {
  return (
    <>
      <Header />

      <Profile />

      <Articles />

      <Footer />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
