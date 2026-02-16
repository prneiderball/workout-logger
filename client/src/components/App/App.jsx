import { useState } from "react";
import "./App.css";
import Header from "../Header/Header.jsx";

function App() {
  const Today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  return (
    <main className="app">
      <Header />
      <section className="app__content">
        <div className="app__date">
          <time>Today: {Today}</time>
        </div>

        <button className="app__btn"> + Log workout</button>

        <div className="app__history--container">
          <h2 className="app__history--title">Previous Workouts:</h2>
        </div>
      </section>
    </main>
  );
}

export default App;
