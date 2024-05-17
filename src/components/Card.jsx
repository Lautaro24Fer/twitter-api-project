import React, { useEffect, useState } from "react";

export default function Card({ user, username, img, folder, tw, id }) {
  return (
    <article className="rounded-2xl relative bg-white h-80 w-60 flex flex-col hover:-translate-y-4 transition-all hover:shadow-lg hover:shadow-stone-300 :w-30">
      <a href={`/${id}`} className="absolute h-full w-full "></a>
      <header className="w-full h-2/5">
        <img
          src={folder}
          alt={`${user}-walpaper`}
          className="object-cover h-full w-full"
          style={{
            borderRadius: "1rem 1rem 0 0",
          }}
        />
      </header>
      <div className="flex gap-3 px-3 py-3">
        <img src={img} alt={user} className="rounded-full h-max" />
        <div className="flex flex-col items-start w-max">
          <h3 className="font-bold text">{user}</h3>
          <span>@{username}</span>
        </div>
      </div>
    </article>
  );
}
