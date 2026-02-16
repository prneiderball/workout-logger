import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";

function App() {
  return (
    <main className="app">
      <Header />
      <section className="app__content">
        <div className="app__date">
          <p>Today: February 16th, 2026</p>
        </div>

        <button className="app__btn">Log workout</button>

        <div className="app__history--container">Previous Workouts:</div>
      </section>
    </main>
  );
}

export default App;
