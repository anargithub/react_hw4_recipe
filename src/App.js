// import React, { useState, useEffect } from "react";
// import Recipe from "./components/Recipe/Recipe";
// import "./App.css";

// function App() {
//   const APP_ID = "2a821ad2";
//   const APP_KEY = "907ffa54225835849175aaf3ae4c804b";

//   const [recipies, setRecipies] = useState([]);
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     getRecipies();
//   }, [query]);

//   const getRecipies = async () => {
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20&calories=591-722&health=alcohol-free`
//     );
//     const data = await response.json();
//     console.log(data.hits);
//     setRecipies(data.hits);
//   };

//   const updateSearch = (e) => {
//     setSearch(e.target.vvalue);
//   };

//   const getSearch = (e) => {
//     e.preventDefault();
//     setQuery(search);
//     setSearch("");
//   };

//   return (
//     <div className="App">
//       <form onSubmit={getSearch} className="search-form">
//         <input
//           className="search-bar"
//           type="text"
//           value={search}
//           onChange={updateSearch}
//         ></input>
//         <button className="search-button" type="submit">
//           Search
//         </button>
//       </form>
//       <div className="recipies">
//         {recipies.map((recipe) => (
//           <Recipe
//             key={recipe.recipe.lable}
//             title={recipe.recipe.label}
//             calories={recipe.recipe.calories}
//             image={recipe.recipe.image}
//             ingredients={recipe.recipe.ingredients}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// App.js
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
