import { useTime } from "../Utils/useTime";
import { useCounter } from "../Utils/useCounter";

export function useTypeGame(text, timeEntered) {
  const { runTime, time, setTime } = useTime(timeEntered);

  const {
    isGameRunning,
    setIsGameRunning,
    wordCount,
    setWordCount,
  } = useCounter(time, runTime, text);

  return {
    time,
    setTime,
    wordCount,
    setWordCount,
    isGameRunning,
    setIsGameRunning,
  };
}
