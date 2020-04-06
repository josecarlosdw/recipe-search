import React, {useEffect, useState} from "react";
import Recipe from './Recipe';
import "./App.css";

const App = () => {
  const APP_ID = "2434a684";
  const APP_KEY = "f8ccda24955cdcf79a1be1ccc42e5013";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() =>{
    getRecipes();
    
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    
    const data = await response.json();
    setRecipes(data.hits);
  };


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
        Buscar Receitas</button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            title={recipe.recipe.label}
            dietLabels={recipe.recipe.dietLabels}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients} />
          ))}
      </div>
    </div>
  );
 };

 export default App;