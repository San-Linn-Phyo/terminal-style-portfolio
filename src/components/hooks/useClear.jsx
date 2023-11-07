import { useState } from "react";

export function useClear() {
  const [isCleared, setIsCleared] = useState(false);
  return { isCleared, setIsCleared };
}
