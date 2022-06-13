import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=28b69ed8&app_key=f7127eeedefd54cbed54df954db2aaf5`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
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
    <div className="App">
      <h1 className="title">FOOD RECIPES</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recepies">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            /* title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            cuisineType={recipe.recipe.cuisineType}
            dietLabels={recipe.recipe.dietLabels}
            mealType={recipe.recipe.mealType} */
            recipe={recipe.recipe}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
