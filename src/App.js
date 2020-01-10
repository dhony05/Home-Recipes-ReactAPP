import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  // Requerements to make request , API ID and API key
  const APP_ID = "a2d2553c";
  const APP_KEY = "02da26adcb90b6356927dabc9411d45f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query,setQuery] = useState('chicken');


  // remember hook calls , has to be inside the function
  // useEffect will run whenever the value in [] runs in this case getRecipes()
  useEffect(() => {
    //console.log('Effect has been run');
    getRecipes();
  }, [query]);

  //fetching all the data
  // external request has to have await
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    
    console.log(search);
  };


  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch(" ");
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
          required
        />
        <button type="submit" className=" search-button">
          Search
        </button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe
        
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
           
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};

export default App;
