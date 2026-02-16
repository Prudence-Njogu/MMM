import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Practice from "./components/Practice";
import Blog from "./components/Blog";
import Chatbot from "./components/Chatbot";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const path = window.location.pathname;

  const renderPage = () => {
    switch (path) {
      case "/about":
        return <About />;
      case "/contact":
        return <Contact />;
      case '/Practice':
        return <Practice />;
      case '/blog':
        return <Blog />;
      case '/chatbot':
        return <Chatbot />;
      case '/':
      default:
        return <Home />;
    }
  };

  return (
    <Router>
      <Navbar />
      <Switch>
        {renderPage()}
      </Switch>
    </Router>
  );
}

export default App;