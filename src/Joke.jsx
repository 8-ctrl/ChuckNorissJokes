import React, { useContext, useState } from "react";
import { MyContext } from "./JokeContext";

const Button = () => {
  const [categories, fetchjokes, jokes] = useContext(MyContext);
  const [selectedCategory, setSelectedCategory] = useState(["dev"]);

  function handleCategory(e) {
    if (selectedCategory !== e.target.value) {
      setSelectedCategory(e.target.value);
      console.log(e.target.value);
      fetchjokes(selectedCategory);
    }
  }
  function newJoke() {
    fetchjokes(selectedCategory);
  }

  return (
    <div className="App">
      <h1 className="heading">Chuck Norries</h1>
      <div className="categories-wrapper">
        {categories.map((value, id) => (
          <button
            className="btn"
            key={id}
            value={value}
            onClick={handleCategory}
          >
            {value}
          </button>
        ))}
      </div>

      <div className="selected-category">
        <span>Selected Category:</span>
        <span className="category"> {selectedCategory}</span>
      </div>

      <div className="text-container">
        {/* <p className="joke"> */}
        {jokes ? jokes : "The Jokes will be displayed here"}
        {/* </p> */}
      </div>
      <button className="btn btn-cyan get-new-joke-btn" onClick={newJoke}>
        Get New Joke 😂
      </button>
    </div>
  );
};

export default Button;
