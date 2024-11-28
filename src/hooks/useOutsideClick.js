import { useEffect } from "react";

export function useOutsideClick(ref, handler) {
  useEffect(() => {
    const handle = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handle);

    return () => {
      document.removeEventListener("mousedown", handle);
    };
  }, [ref, handler]);
}
