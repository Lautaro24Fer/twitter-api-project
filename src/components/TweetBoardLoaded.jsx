import React, { useState } from "react";
import "./spinner.css";
import "./Card.css";

function ImageLoaded({ user }) {
  const [loaded, setLoaded] = useState(false);

  const handleLoadImage = () => {
    setLoaded(true);
  };

  return (
    <div className="h-full w-full">
      <img
        src={user.user.profile_banner_url}
        alt={user.user.name}
        onLoad={handleLoadImage}
        className="object-cover w-full h-full"
        style={{
          opacity: loaded ? "1" : "0",
          transition: "all .2s ease-in-out",
          borderRadius: "2rem 2rem 0 0",
          position: loaded ? "relative" : "absolute",
        }}
      />
      {!loaded && (
        <section className="w-full h-full flex justify-center items-center">
          <div className="spinner"></div>
        </section>
      )}
    </div>
  );
}

export default function TweetBoardLoaded({ user }) {
  return (
    <>
      <header className="relative h-2/5 w-full">
        <ImageLoaded user={user} />
      </header>
      <section className="h-full w-full flex justify-center pt-10 ">
        <article className="w-3/4 h-max p-6 rounded-2xl bg-white shadow-lg shadow-slate-500">
          <section className="flex gap-2 items-center">
            <img
              src={user.user.profile_pic_url}
              alt={user.user.name}
              className="h-10 w-10 rounded-full"
            />
            <div>
              <h3 className="font-bold userText">{user.user.name}</h3>
              <p className="font-light text-grey userText">
                @{user.user.username}
              </p>
            </div>
          </section>
          <p>{user.text}</p>
        </article>
      </section>
    </>
  );
}
