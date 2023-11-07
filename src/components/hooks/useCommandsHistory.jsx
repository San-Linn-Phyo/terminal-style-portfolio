import { useEffect, useState } from "react";

export function useCommandsHistory(setIsCleared) {
  const [history, setHistory] = useState([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

  function handleCommand(command) {
    if (command === "clear") {
      setHistory([]);
      setIsCleared(true);
      return;
    }

    setHistory((prev) => [...prev, command]);
  }

  useEffect(() => {
    setCurrentHistoryIndex(history.length);
  }, [history]);

  return {
    handleCommand,
    history,
    currentHistoryIndex,
    setCurrentHistoryIndex,
  };
}
