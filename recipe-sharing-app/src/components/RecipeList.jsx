import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <ul>
      {filteredRecipes.map((recipe) => (
        <li key={recipe.id} style={{ marginBottom: '16px' }}>
          <h3>{recipe.title}</h3>
          <p>Ingredients: {recipe.ingredients.join(", ")}</p>
          <p>Preparation Time: {recipe.time} mins</p>
          {/* Link to a detailed recipe view */}
          <Link to={`/recipe/${recipe.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
            View Details
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeList;
