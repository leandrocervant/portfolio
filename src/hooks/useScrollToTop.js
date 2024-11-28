import { useEffect, useState } from "react";

export function useScrollToTop(ref) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const handleScroll = () => {
      const isNearBottom =
        element.scrollHeight - element.scrollTop <= element.clientHeight + 100;

      setShowButton(isNearBottom);
    };

    element.addEventListener("scroll", handleScroll);

    return () => element.removeEventListener("scroll", handleScroll);
  }, [ref]);

  const scrollToTop = () => {
    if (ref.current) {
      ref.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return { showButton, scrollToTop };
}
