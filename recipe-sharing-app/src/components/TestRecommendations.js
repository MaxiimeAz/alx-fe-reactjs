// components/TestRecommendations.js
import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import RecommendationsList from './RecommendationsList';
import FavoritesList from './FavoritesList';

const TestRecommendations = () => {
  const { recipes, addFavorite, generateRecommendations } = useRecipeStore(state => ({
    recipes: state.recipes,
    addFavorite: state.addFavorite,
    generateRecommendations: state.generateRecommendations,
  }));

  useEffect(() => {
    // Simulate adding a favorite when the recipes are loaded
    if (recipes.length > 0) {
      addFavorite(recipes[0].id);  // Adding the first recipe to favorites
      generateRecommendations();   // Generate recommendations after adding a favorite
    }
  }, [recipes, addFavorite, generateRecommendations]);

  return (
    <div>
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default TestRecommendations;
