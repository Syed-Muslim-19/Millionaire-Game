import { useEffect, useState } from "react";

export default function Watch({ setStop, QN }) {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [setStop, timer]); // Empty dependency array ensures this effect runs only once on mount\
  useEffect(() => {
    setTimer(30);
  }, [QN]);
  return timer;
}
