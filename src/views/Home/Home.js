import React from "react";
import "./Home.css";

const Home = () => {

  return (
    <div>
      <h1 className="title display">TOO DOO LIST</h1>
      <p className="second-title display">
        <b>A simple to do list app that helps you keep track of your tasks.</b>
      </p>
      <div className="container">
        <div>
          <h1>Show List</h1>
          
        </div>
        <div>
          <h1>Add List</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
