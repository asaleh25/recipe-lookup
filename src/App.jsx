import React from 'react';
import './App.css';
import RecipeCard from './Components/RecipeCard';

function App() {
  return (
    <div className="App">
      <RecipeCard
        id={657956}
        imageLink="https://spoonacular.com/recipeImages/657956-312x231.jpg"
        recipeTitle="Ravioli With Arugula, Pine Nuts, Raisins & Cream"
      />
    </div>
  );
}

export default App;
