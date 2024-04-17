import React, { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        type="text"
        placeholder="Your Name"
        className="sinput"
        ref={inputRef}
      />
      <button className="Button" onClick={handleClick}>
        Enter
      </button>
    </div>
  );
}
