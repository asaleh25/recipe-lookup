import React from "react";
import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipeList }) {
  return (
    <Grid container spacing={2}>
      {recipeList.map((recipe) => {
        return (
          <Grid item xs={12} md={4} key={recipe.id}>
            <RecipeCard
              id={recipe.id}
              imageLink={recipe.image}
              recipeTitle={recipe.title}
            />
          </Grid>
        );
        console.log(recipe.title);
      })}
    </Grid>
  );
}
