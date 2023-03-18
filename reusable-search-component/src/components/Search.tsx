import { useEffect, useState } from "react";
import { searchSpaces } from "../service/search";

type Space = {
  name: string;
};

function Search() {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [spaces, setSpaces] = useState<Space[]>([]);

  useEffect(() => {
    let ignore = false;
    const intervalId = setTimeout(() => {
      setErrorMessage("");
      searchSpaces(searchText)
        .then((res) => {
          if (!ignore) {
            setSpaces(res.spaces);
            setErrorMessage("");
          }
        })
        .catch((err) => {
          setSpaces([]);
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
        {spaces.map((space, index) => (
          <div key={index}>{space.name}</div>
        ))}
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}

export default Search;
