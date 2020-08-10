import { useState } from "react";

export function useTime(timeEntered = 10) {
  const [time, setTime] = useState(timeEntered);

  function runTime() {
    setTime((prevTime) => --prevTime);
  }

  return { time, runTime, setTime };
}
