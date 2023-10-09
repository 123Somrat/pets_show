import React, { useState, useEffect } from "react";
import PetNews from "./PetNews";

export default function PetsNewses() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("../../public/petNews.json")
      .then((data) => data.json())
      .then((res) => setNews(res))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      <h1 className="text-5xl m-12 text-center">Pet News.....</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-4">
        {news.map((news, id) => (
          <PetNews key={id} news={news} />
        ))}
      </div>
    </div>
  );
}
