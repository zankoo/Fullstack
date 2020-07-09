import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0)
  );

  function randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      default:
        return 0;
    }
  }

  const random = () => {
    let temp;
    while (true) {
      temp = randomNum(0, 5);
      if (temp !== selected) break;
    }
    setSelected(temp);
    console.log(indexOfMax);
  };

  const vote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  let indexOfMax = 0;
  let max = votes.reduce(
    (votes, c, i) => (c > votes ? ((indexOfMax = i), c) : votes),
    0
  );

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={vote}>vote</button>
      <button onClick={random}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{props.anecdotes[indexOfMax]}</p>
      <p>has {max} votes</p>
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
