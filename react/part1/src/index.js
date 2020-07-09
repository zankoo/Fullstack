import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  return (
    <>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {(good - bad) / all}</p>
      <p>positive {(good / all) * 100 + "%"}</p>
    </>
  );
};

const Button = ({ handelClick, text }) => (
  <button onClick={handelClick}>{text}</button>
);

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodB = () => {
    setGood(good + 1);
  };

  const neutralB = () => {
    setNeutral(neutral + 1);
  };

  const badB = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handelClick={goodB} text="good" />
      <Button handelClick={neutralB} text="neutral" />
      <Button handelClick={badB} text="bad" />
      <Statistics bad={bad} neutral={neutral} good={good} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
