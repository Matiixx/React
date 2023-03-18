import { useState } from "react";

export default function usePostalCode(): [string, (arg: string) => void] {
  const [code, setCodeState] = useState("");

  const setCode = (arg: string) => {
    const isDigit = new RegExp("^\\d{1}$");
    const lastChar = arg[arg.length - 1];
    let isDeleting = false;

    if (!isDigit.test(lastChar) && arg.length && lastChar != "-") return;
    if (arg.length > 6) return;
    if (arg.length < code.length) isDeleting = true;
    if (isDeleting && arg.length == 2) arg = arg[0];
    if (!isDeleting && arg.length == 2) arg += "-";

    setCodeState(arg);
  };

  return [code, setCode];
}
