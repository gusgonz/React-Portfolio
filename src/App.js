import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      {/* <div> */}
      {/* <Header /> */}
      <Wrapper>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} />
          <Route exact path="/search" component={Search} />  */}
      </Wrapper>
      {/* <Footer /> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
