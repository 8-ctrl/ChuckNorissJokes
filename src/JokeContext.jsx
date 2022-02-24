import React, { createContext, useEffect, useState } from "react";

export const MyContext = createContext();
export const ContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const fetchCategories = () => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((err) => {
        console.error(err);
        throw err;
      });
  };

  const [jokes, setjokes] = useState([]);
  const fetchjokes = (currCategory) => {
    fetch(`https://api.chucknorris.io/jokes/random?category=${currCategory}`)
      .then((response) => response.json())
      .then((data) => setjokes(data))
      .catch((err) => {
        console.error(err);
        throw err;
      });
    
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <MyContext.Provider
      value={[categories, fetchjokes, jokes.value]}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useContext = () => useContext(MyContext);
