import React, { useEffect, useState } from "react";
import { searchSpaces } from "../service/searchAddress";

type Address = {
  address: string;
  country: string;
};

function SearchAddress() {
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [spaces, setSpaces] = useState<Address[]>([]);

  useEffect(() => {
    let ignore = false;
    const intervalId = setTimeout(() => {
      setErrorMessage("");
      searchSpaces(searchText)
        .then((res) => {
          if (!ignore) {
            setSpaces(res.addresses);
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
          <div key={index}>
            {space.address} {space.country}
          </div>
        ))}
        {errorMessage && <span>{errorMessage}</span>}
      </div>
    </div>
  );
}

export default SearchAddress;
