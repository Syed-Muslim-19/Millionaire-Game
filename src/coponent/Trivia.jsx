import React, { useEffect, useState } from "react";

const Trivia = ({ data, setTime, setQN, QN }) => {
  const [q, setQ] = useState(null);
  const [ans, setAns] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQ(data[QN - 1]);
  }, [data, QN]);
  const delay = (duration, callback) => {
    setTime(() => {
      callback();
    }, duration);
  };
  const handleClick = (a) => {
    setAns(a);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
      setTimeout(() => {
        if (a.correct) {
          setQN((prev) => prev + 1);
          setAns(null);
          setTime(true);
        } else {
          setTime(null);
        }
      }, 2000);
    }, 500);
  };

  return (
    <div className="trivia">
      <div className="question">{q?.question}</div>
      <div className="answers">
        {q?.answers.map(
          (
            a // 'a' is defined here as a parameter of map function
          ) => (
            <div
              className={ans === a ? className : "answer"}
              onClick={() => handleClick(a)}
              key={a.text}
            >
              {a.text}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Trivia;
