import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={((good - bad) / all).toFixed(1)} />
          <Statistic
            text="positive"
            value={((good / all) * 100).toFixed(1) + "%"}
          />
        </tbody>
      </table>
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
