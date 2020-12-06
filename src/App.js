import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/Home";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";

import "./App.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="wrapper bg-dark">
      <div className="mobile-header">
        <Router>
          <nav className="mobile navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
              <h3>Mole.</h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-item nav-link" to="/works">
                  Works
                </Link>
                <Link className="nav-item nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-item nav-link" to="/contact">
                  Contact Me
                </Link>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            {/* <Route exact path="/" component={Works}></Route> */}

            <Route exact path="/works" component={Works}></Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </div>
      <div className="desktop-view">
        <div className="desktop-header">
          <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link className="navbar-brand" to="/">
                <h3>Mole.</h3>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-item nav-link active" href="/#">
                    Home
                  </a>
                  <a className="nav-item nav-link active" href="/#">
                    Works
                  </a>
                  <a className="nav-item nav-link active" href="/#">
                    About
                  </a>
                  <a className="nav-item nav-link active" href="/#">
                    Contact Me
                  </a>
                </div>
              </div>
            </nav>
            <Switch>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </Router>
        </div>
        <div className='sec-desktop-view'>
          <About />
          <Contact />
        </div>
      </div>
      <div className="footer">
        <div className="socials">
          <a href="https://github.com/mosesfawole">
            {" "}
            <i className="fab fa-github"></i>
          </a>
          <a href="https://mobile.twitter.com/Pharwoleh">
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://web.whatsapp.com/08143456417">
            {" "}
            <i className="fab fa-whatsapp    "></i>
          </a>
          <a href="https://facebook.com/mosesfawole">
            {" "}
            <i className="fab fa-facebook    "></i>
          </a>
        </div>
        <div className="last text-muted">
          <p>
            Inspired by
            <a
              href="https://sarahdayan.dev/"
              target="_blank"
              rel="noreferrer noopener"
            >
              {} <b className="b-light">Sarah Dayan</b>
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
