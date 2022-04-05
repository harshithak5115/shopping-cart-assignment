import React, { useEffect } from "react";
import { useState } from "react";
import "../Categories/categories.component.css";

const CategoryPage = () => {
  const [category, setCategory] = useState([]);

  const fetchCategory = () => {
    fetch("http://localhost:3001/categories")
      .then((res) => res.json())
      .then((res) => setCategory(res));
  };
  console.log("category", category);

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <div className="categories-container">
        {category.map(({ name, imageUrl, description, id }) => (
          <div key={id} className="category-container">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />

            <div className="category-body-container">
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* {category.map((category)=>
            <img src={category.imageUrl}/>)} */}
    </>
  );
};

export default CategoryPage;
