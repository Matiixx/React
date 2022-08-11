import React, { useState } from "react";
import Axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Character from "./Character";

export default function CharactersContainer() {
  const [page, setPage] = useState(10);

  const fetchData = async ({ queryKey }) => {
    const { data } = await Axios.get(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return data;
  };

  const {
    data: characters,
    isLoading,
    isPreviousData,
  } = useQuery(["characters", page], fetchData, {
    keepPreviousData: true,
  });

  if (isLoading) {
    return <p>Loading data...</p>;
  }
  console.log(characters);
  return (
    <>
      <div className="characters-container">
        {characters.results.map((el) => {
          return <Character data={el} key={el.id} />;
        })}
        <div className="btn-container">
          <button
            disabled={isPreviousData && characters.info.prev === null}
            onClick={() => setPage((p) => p - 1)}
          >
            Previous
          </button>
          <button
            disabled={isPreviousData && characters.info.next === null}
            onClick={() => setPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
