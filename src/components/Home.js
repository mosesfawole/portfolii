import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Works from "./Works";
// import About from "./About";
// import Contact from "./Contact";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Works from "./Works";

function Home() {
  return (
  
      <div className="main bg-dark">
        <div className="avatar"></div>
        <div className="info">
          <h2>Hello! I'm Moses Fawole.</h2>
          <p className="text text-muted">
            I'm a <b className="text-white">Frontend Developer</b>. I spend most
            of my time writing code for application using{" "}
            <b className="text-white">Javascript, React Js</b>, integrating into
            <b className="text-white"> Full Stack</b> soon . I use CSS and
            Bootstrap to create efficient user experience.
          </p>
          <Router>
          <div className="button">
            <button className="btn">
              <Link to="/works">Explore -&gt;</Link>
            </button>
          <Switch>
            <Route exact path="/works" component={Works}>
            </Route>
          </Switch>
          </div>
    </Router>
        </div>
        <div className="desktop-view">
          <Works />
        </div>
        <div>

        </div>
      </div>
  );
}
export default Home;
