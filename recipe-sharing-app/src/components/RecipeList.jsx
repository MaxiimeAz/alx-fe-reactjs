import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <ul>
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          <p>Preparation Time: {recipe.time} mins</p>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
