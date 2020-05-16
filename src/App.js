import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {

  return (
    <Router>
      <Header />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
      <Footer />
    </Router>
  );

}

export default App;
