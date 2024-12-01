import React, { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore'; // Import Zustand store

const RecipeList = () => {
  // Extract the filteredRecipes and the filterRecipes action from the Zustand store
  const { filteredRecipes, filterRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes
  }));

  // Use useEffect to trigger the filtering action whenever the filteredRecipes state changes
  useEffect(() => {
    filterRecipes(); // Filter recipes whenever the state changes
  }, [filterRecipes]);

  // Render the filtered recipes
  return (
    <div>
      {filteredRecipes.length > 0 ? (
        // If there are filtered recipes, map over them and display
        filteredRecipes.map((recipe, index) => (
          <div key={index}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        // Display this message if no recipes match the search term
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
