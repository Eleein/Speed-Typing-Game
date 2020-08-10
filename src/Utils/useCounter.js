import { useEffect, useState } from "react";
import { calculateWords } from "./calculateWords";

export function useCounter(time, runTime, text) {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (isGameRunning && time > 0) {
      setTimeout(runTime, 1000);
    } else if (time === 0) {
      const totalWords = calculateWords(text);
      setWordCount(totalWords);
      setIsGameRunning(false);
    }
  }, [isGameRunning, time]);

  return { isGameRunning, setIsGameRunning, wordCount, setWordCount };
}
