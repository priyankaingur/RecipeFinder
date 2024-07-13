// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/recipes/')
        .then(response => setRecipes(response.data))
        .catch(error => console.error('There was an error fetching the recipes!', error));
  }, []);

  const addrecipe = () => {
    axios.post('http://localhost:8000/api/recipe/', { name: recipe })
        .then(response => setRecipes([...recipes, response.data]))
        .catch(error => console.error('There was an error adding the recipe!', error));
    setRecipe('');
  };

  return (
      <div className="App">
        <h1>Recipe List</h1>
        <input
            type="text"
            value={recipe}
            onChange={e => setRecipe(e.target.value)}
            placeholder="Add a new Recipe"
        />
        <button onClick={addrecipe}>Add recipe</button>
        <ul>
          {recipes.map(recipe => (
              <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      </div>
  );
}

export default App;
