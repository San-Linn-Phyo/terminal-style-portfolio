import { useEffect } from "react";

export default function Exit() {
  useEffect(() => {
    const timeoutID = setTimeout(() => {
      window.close();
    }, 2000);

    return () => {
      clearTimeout(timeoutID);
    };
  }, []);

  return <p>Sorry to see you go 😔.</p>;
}
