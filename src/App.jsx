import "./App.css";
import {} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useMemo, useState } from "react";
import Tri from "./coponent/Trivia";
import Watch from "./coponent/watch";
import Start from "./coponent/Start";
function App() {
  const [QN, setQN] = useState(1);
  const [time, setTime] = useState(false);
  const [username, setUsername] = useState(null);
  const [earn, setEarn] = useState("$0");
  const [Stop, setStop] = useState(false);
  const moneypyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$100" },
        { id: 2, amount: "$500" },
        { id: 3, amount: "$1000" },
        { id: 4, amount: "$2500" },
        { id: 5, amount: "$5000" },
        { id: 6, amount: "$10000" },
        { id: 7, amount: "$25000" },
        { id: 8, amount: "$50000" },
        { id: 9, amount: "$100000" },
        { id: 10, amount: "$250000" },
        { id: 11, amount: "$500000" },
        { id: 12, amount: "$750000" },
        { id: 13, amount: "$1000000" },
      ].reverse(),
    []
  );
  const data = [
    {
      id: 1,
      question:
        "A flashing red traffic light signifies that a driver should do what?",
      answers: [
        { text: "stop", correct: true },
        { text: "speed up", correct: false },
        { text: "proceed with caution", correct: false },
        { text: "honk the horn", correct: false },
      ],
    },
    {
      id: 2,
      question: "A knish is traditionally stuffed with what filling?",
      answers: [
        { text: "potato", correct: true },
        { text: "creamed corn", correct: false },
        { text: "lemon custard", correct: false },
        { text: "raspberry jelly", correct: false },
      ],
    },
    {
      id: 3,
      question: "A pita is a type of what?",
      answers: [
        { text: "fresh fruit", correct: false },
        { text: "flat bread", correct: true },
        { text: "French tart", correct: false },
        { text: "friend bean dip", correct: false },
      ],
    },
    {
      id: 4,
      question:
        "A portrait that comically exaggerates a person's physical traits is called a what?",
      answers: [
        { text: "landscape", correct: false },
        { text: "caricature", correct: true },
        { text: "still life", correct: false },
        { text: "Impressionism", correct: false },
      ],
    },
    {
      id: 5,
      question: "A second-year college student is usually called a what?",
      answers: [
        { text: "sophomore", correct: true },
        { text: "senior", correct: false },
        { text: "freshman", correct: false },
        { text: "junior", correct: false },
      ],
    },
    {
      id: 6,
      question:
        "A student who earns a J.D. can begin his or her career as a what?",
      answers: [
        { text: "lawyer", correct: true },
        { text: "bricklayer", correct: false },
        { text: "doctor", correct: false },
        { text: "accountant", correct: false },
      ],
    },
    {
      id: 7,
      question:
        "A triptych is a work of art that is painted on how many panels?",
      answers: [
        { text: "two", correct: false },
        { text: "three", correct: true },
        { text: "five", correct: false },
        { text: "eight", correct: false },
      ],
    },
    {
      id: 8,
      question:
        "According to a famous line from the existentialist play 'No Exit' what is hell?",
      answers: [
        { text: "oneself", correct: false },
        { text: "other people", correct: true },
        { text: "little made large", correct: false },
        { text: "hued in green and blue", correct: false },
      ],
    },
    {
      id: 9,
      question:
        "According to a popular slogan, what state should people not 'mess with'?",
      answers: [
        { text: "New York", correct: false },
        { text: "Texas", correct: true },
        { text: "Montana", correct: false },
        { text: "Rhode Island", correct: false },
      ],
    },
    {
      id: 10,
      question:
        "According to a Yale University study, what smell is the most recognizable to American adults?",
      answers: [
        { text: "tuna", correct: false },
        { text: "laundry", correct: false },
        { text: "popcorn", correct: false },
        { text: "coffee", correct: true },
      ],
    },
    {
      id: 11,
      question:
        "According to folklore, the 'jackalope' is an antlered version of what animal?",
      answers: [
        { text: "chicken", correct: false },
        { text: "rabbit", correct: true },
        { text: "moose", correct: false },
        { text: "snake", correct: false },
      ],
    },
    {
      id: 12,
      question: "According to Greek mythology, who was Apollo's twin sister?",
      answers: [
        { text: "Aphrodite", correct: false },
        { text: "Artemis", correct: true },
        { text: "Venus", correct: false },
        { text: "Athena", correct: false },
      ],
    },
    {
      id: 13,
      question:
        "According to legend, if you give someone the 'evil eye' what are you doing?",
      answers: [
        { text: "cursing them", correct: true },
        { text: "blessing a child", correct: false },
        { text: "counting money", correct: false },
        { text: "passing time", correct: false },
      ],
    },
    {
      id: 14,
      question: "Backgammon is a how many player game?",
      answers: [
        { text: "Two", correct: true },
        { text: "Three", correct: false },
        { text: "Four", correct: false },
        { text: "Six", correct: false },
      ],
    },
  ];
  useEffect(() => {
    QN > 1 && setEarn(moneypyramid.find((m) => m.id === QN - 1).amount);
  }, [moneypyramid, QN]);
  return (
    <div className="App">
      {username ? (
        <>
          <div className="main">
            {time === null || Stop === true || QN === 14 ? (
              <h1 className="end">You Earned : {earn} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Watch setStop={setStop} QN={QN} />
                  </div>
                  <h2 className="score">{earn} </h2>
                </div>
                <div className="bottom">
                  <Tri data={data} setTime={setTime} setQN={setQN} QN={QN} />
                </div>
              </>
            )}
          </div>
          <div className="col-3 pyramid">
            <ul className="moneylist">
              {moneypyramid.map((m) => (
                <li
                  className={
                    QN === m.id ? "moneylistitem active" : "moneylistitem"
                  }
                >
                  <span className="moneylistitemamount">{m.amount}</span>
                  <span className="moneylistitemnumber">{m.id}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
