import React from "react";
import "./styles.css";
import JobList from "./components/JobList";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App ">
      <Header />
      <JobList />
      <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://twitter.com/UncleJAA">Jerry Aaron</a>.
  </div>
    </div>
  );
}
