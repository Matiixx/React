import { useEffect, useState } from "react";

export default function usePageBottom(ERR = 5) {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setReachedBottom(
        Math.floor(window.document.body.getBoundingClientRect().bottom - ERR) <=
          window.innerHeight
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return reachedBottom;
}
