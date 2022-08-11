import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export default function Home() {
  const {
    data: catData,
    isLoading: isLoadingCatData,
    isError: isErrorCatData,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isErrorCatData) {
    return <p>Error</p>;
  }

  if (isLoadingCatData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>Fact: {catData.fact}</p>
    </div>
  );
}
