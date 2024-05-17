import React, { useEffect, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";
import TweetBoardLoading from "./TweetBoardLoading";
import TweetBoardLoaded from "./TweetBoardLoaded";

export default function TweetBoardHandeler({ user }) {
  const handleFetch = async () => {
    const url = `https://twitter154.p.rapidapi.com/tweet/details?tweet_id=${user.tweetExID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.PUBLIC_API_KEY,
        "X-RapidAPI-Host": import.meta.env.PUBLIC_API_HOST,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      return result;
    } catch (error) {
      return error;
    }
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["tweet"],
    queryFn: handleFetch,
  });

  return (
    <>
      {error && <h1>Error fetching data</h1>}
      {isLoading || isFetching ? (
        <TweetBoardLoading />
      ) : (
        <TweetBoardLoaded user={JSON.parse(data)} />
      )}
    </>
    // <TweetBoardLoaded user={user} />
  );
}
