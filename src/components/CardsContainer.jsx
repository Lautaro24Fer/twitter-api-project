import React from "react";
import dataUsers from "../util/dataUsers.json";
import Card from "./Card.jsx";

export default function CardsContainer() {
  return (
    <section className="flex flex-col w-full h-full overflow-y-auto gap-5 pt-5">
      {dataUsers.map((user) => (
        <Card
          key={user.user_id}
          user={user.name}
          username={user.username}
          img={user.profile_pic_url}
          folder={user.profile_banner_url}
          tw={user.tweetExID}
          id={user.user_id}
        />
      ))}
    </section>
  );
}
