import React from "react";
import '../App.css';
import berlinlogo from "../Component/berlinlogo.png";

function Navbar() {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container row">
        <div className="col-4 "><img src={berlinlogo}></img></div>
        <div className="col-8">
        <h4 className="display-4">Police department of Berlin</h4>
        <p className="lead">Stolen Bykes</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
