import Welcome from "./Welcome.jsx";
import TerminalInfo from "./TerminalInfo.jsx";
import { useCommandsHistory } from "./hooks/useCommandsHistory.jsx";
import CommandsOutput from "./CommandsOutput.jsx";
import { useClear } from "./hooks/useClear.jsx";
import { useRef } from "react";

export default function Terminal() {
  const { isCleared, setIsCleared } = useClear();
  const {
    handleCommand,
    history,
    currentHistoryIndex,
    setCurrentHistoryIndex,
  } = useCommandsHistory(setIsCleared);
  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current) {
      handleCommand(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  function focusInput() {
    inputRef.current.focus();
  }

  function showPreviousCommand() {
    let result = undefined;
    if (currentHistoryIndex === 0) result = history[currentHistoryIndex];
    else result = history[currentHistoryIndex - 1];

    inputRef.current.value = result ?? "";
    setCurrentHistoryIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  }

  function showNextCommand() {
    inputRef.current.value = history[currentHistoryIndex + 1] ?? "";
    setCurrentHistoryIndex((prev) =>
      prev + 1 > history.length - 1 ? history.length : prev + 1
    );
  }

  function handleKeydown(e) {
    if (e.key === "ArrowUp") showPreviousCommand();
    else if (e.key === "ArrowDown") showNextCommand();
  }

  return (
    <div className="bg-color text-color min-h-screen px-4" onClick={focusInput}>
      {!isCleared && <Welcome />}

      <CommandsOutput history={history} />

      <div className="mt-4">
        <TerminalInfo />

        <div className="flex gap-2">
          <span>&#11166;</span>

          <form onSubmit={handleSubmit}>
            <input
              ref={inputRef}
              onKeyDown={handleKeydown}
              type="text"
              className="w-full bg-inherit focus:outline-0"
              autoFocus={true}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
