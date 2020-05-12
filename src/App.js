import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Projects from "./pages/Projects"
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
// import PageContainer from "./components/PageContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Wrapper>
          {/* <PageContainer> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          {/* <Route exact path="/connect" component={Connect} /> */}
          {/* </PageContainer> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
