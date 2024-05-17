import React from "react";
import "./spinner.css";

export default function TweetBoardLoading() {
  return (
    <div className="absolute -translate-x-1/2 left-1/2 mt-20 flex flex-col gap-4 items-center w-max">
      <div className="spinner"></div>
      <h3 className="text-lg">Loading tweet. Wait a moment</h3>
    </div>
  );
}
