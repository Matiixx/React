import { useEffect, useState } from "react";

interface SearchComponentProps<T, U> {
  searchFunction: (searchText: string) => Promise<T>;
  parseResults: (res: T) => U[];
  displayRow: <R extends U>(row: R, key: number) => React.ReactNode;
}

function SearchComponent<T, U>({
  searchFunction,
  parseResults,
  displayRow: parseRow,
}: SearchComponentProps<T, U>) {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState<U[]>([]);

  useEffect(() => {
    let ignore = false;
    const intervalId = setTimeout(() => {
      setErrorMessage("");
      searchFunction(searchText)
        .then((res) => {
          if (!ignore) {
            setResults(parseResults(res));
            setErrorMessage("");
          }
        })
        .catch((err) => {
          setResults([]);
          setErrorMessage(err.message);
        });
    }, 500);

    return () => {
      ignore = true;
      clearInterval(intervalId);
    };
  }, [searchText]);

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div>
        {results && results.map((row, index) => parseRow(row, index))}
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}

export default SearchComponent;
