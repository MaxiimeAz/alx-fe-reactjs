
import React, { useEffect } from 'react';
import useRecipeStore from './components/recipeStore';  // Import the Zustand store
import FavoritesList from './components/FavoritesList'; // Import the FavoritesList component
import RecommendationsList from './components/RecommendationsList'; // Import the RecommendationsList component

function App() {
  // Access recipes, addFavorite, and generateRecommendations actions from the store
  const { recipes, addFavorite, generateRecommendations } = useRecipeStore(state => ({
    recipes: state.recipes,
    addFavorite: state.addFavorite,
    generateRecommendations: state.generateRecommendations,
  }));

  // Simulating the initial population of recipes and generating recommendations on load
  useEffect(() => {
    if (recipes.length === 0) {
      // Mocking some sample recipes if none are available
      setTimeout(() => {
        const initialRecipes = [
          { id: 1, title: "Spaghetti Carbonara", description: "A classic Italian pasta dish" },
          { id: 2, title: "Chicken Curry", description: "A flavorful and spicy curry" },
          { id: 3, title: "Vegan Tacos", description: "Delicious plant-based tacos" }
        ];
        initialRecipes.forEach(recipe => addFavorite(recipe.id)); // Adding some recipes to favorites
        generateRecommendations();  // Generate recommendations based on favorites
      }, 500);  // Simulate loading recipes asynchronously
    }
  }, [recipes, addFavorite, generateRecommendations]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      
      {/* Favorites List */}
      <FavoritesList />
      
      {/* Recommendations List */}
      <RecommendationsList />
    </div>
  );
}

export default App;
