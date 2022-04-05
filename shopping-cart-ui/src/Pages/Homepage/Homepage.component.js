import React, { useEffect } from "react";
import { useState } from "react";
import Carousel from "nuka-carousel";
import CategoryPage from "../Categories/categories.component";

const HomePage = () => {
  const [data, setData] = useState([]);

  const fetchImages = () => {
    fetch("http://localhost:3001/banners/")
      .then((res) => res.json())
      .then((res) => setData(res));
  };
  console.log("data", data);

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="homepage-container">
      <Carousel className="carousel-container">
        {data.map((data) => (
          <img
            className="carousel-img"
            key={data.id}
            src={data.bannerImageUrl}
            alt={data.bannerImageAlt}
          />
        ))}
      </Carousel>
      <CategoryPage />
    </div>
  );
};

export default HomePage;
