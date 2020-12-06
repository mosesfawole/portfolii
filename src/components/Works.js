import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

function Works() {
  return (
    <div className="content">    
      <div className="works">
        <div className="name">
          <h4>PhotoSearcher</h4>
          <div className="work-info text-muted">
            <p>Search and download images</p>
            <a href="https://www.netlify.com"> Live</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
      </div>
      <div className="works">
        <div className="name">
          <h4>PhotoSearcher</h4>
          <div className="work-info text-muted">
            <p>Search and download images</p>
            <a href="https://www.netlify.com"> Live</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
      </div>{" "}
      <div className="works">
        <div className="name">
          <h4>PhotoSearcher</h4>
          <div className="work-info text-muted">
            <p>Search and download images</p>
            <a href="https://www.netlify.com"> Live</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
      </div>{" "}
      <div className="works">
        <div className="name">
          <h4>PhotoSearcher</h4>
          <div className="work-info text-muted">
            <p>Search and download images</p>
            <a href="https://www.netlify.com"> Live</a>
            <a href="http://www.github.com">Source</a>
          </div>
        </div>
      </div>
      <div className="works-link">
        <button className="btn">
          {" "}
          {"<"}
          <Link to="/home"> Home</Link>
        </button>
      </div>
    </div>
  );
}
export default Works;
