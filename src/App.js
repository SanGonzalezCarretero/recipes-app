import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";


const App = () => {
  const APP_KEY = "9607eda0";

  const APP_ID = "02ab4ee970de694d99e2a6eb3b638d5a";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=9607eda0&app_key=02ab4ee970de694d99e2a6eb3b638d5a`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="app">
      <div className="header-container">
        <h1 className="header">
          Feeling hungry? <br />
          Search for recipes!
        </h1>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input
          placeholder='Search for ingredientes or plates! e.g. "chicken"'
          onChange={updateSearch}
          value={search}
          className="search-bar"
          type="text"
        />
        <button className="search-button" type="submit">
          Give me a recipe!
        </button>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            ingredients={recipe.recipe.ingredients}
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
