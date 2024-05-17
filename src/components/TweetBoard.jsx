import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TweetBoardHandeler from "./TweetBoardHandeler";

const queryClient = new QueryClient();

export default function TweetBoard({ user }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TweetBoardHandeler user={user} />
    </QueryClientProvider>
  );
}
