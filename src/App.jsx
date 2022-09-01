import React, { useEffect, useState } from "react";
import "./App.css";
//import RecipeCard from './Components/RecipeCard';
import RecipeGrid from "./Components/RecipeGrid";

function App() {
  const results = [
    {
      id: 657956,
      title: "Ravioli With Arugula, Pine Nuts, Raisins & Cream",
      image: "https://spoonacular.com/recipeImages/657956-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 650147,
      title: "Linguini in a Creamy Pea Sauce and Sautéed Shrimp",
      image: "https://spoonacular.com/recipeImages/650147-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 636599,
      title: "Butternut Squash Gnocchi With Whiskey Cream Sauce",
      image: "https://spoonacular.com/recipeImages/636599-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 651965,
      title: "Mini Meatball & Ravioli Soup With Garlic Croutons",
      image: "https://spoonacular.com/recipeImages/651965-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 633587,
      title: "Baked Egg Linguine With Onion, Scallion, and Umame",
      image: "https://spoonacular.com/recipeImages/633587-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 661483,
      title: "Staci's Orecchiette with Fresh Tomatoes and Sausage",
      image: "https://spoonacular.com/recipeImages/661483-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 649029,
      title: "Korean Bibim Naengmyun (Instant Spicy Cold Noodles)",
      image: "https://spoonacular.com/recipeImages/649029-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 1095802,
      title: "Fettuccine with shrimp, mussels and cherry tomatoes",
      image: "https://spoonacular.com/recipeImages/1095802-312x231.jpg",
      imageType: "jpg",
    },
    {
      id: 637593,
      title: "Cheese Tortellini With Shrimp In Tomato Cream Sauce",
      image: "https://spoonacular.com/recipeImages/637593-312x231.jpg",
      imageType: "jpg",
    },
  ];

  return <RecipeGrid recipeList={results} />;
}

export default App;
