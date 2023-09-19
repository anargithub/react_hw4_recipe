
import React, { useState, useEffect } from "react";
import Search from "./components/Search/Search";
import RecipeList from "./components/RecipeList/RecipeList";
import "./App.css";

function App() {
  const APP_ID = "2a821ad2";
  const APP_KEY = "907ffa54225835849175aaf3ae4c804b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <Search
        search={search}
        updateSearch={updateSearch}
        getSearch={handleSearch}
      />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
