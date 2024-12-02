
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Store the list of recipes
  favorites: [], // Store the IDs of the user's favorite recipes
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]  // Add a recipe ID to favorites
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)  // Remove a recipe from favorites
  })),
  recommendations: [],  // Store the list of recommended recipes
  generateRecommendations: () => set(state => {
    // Basic mock recommendation logic: filter recipes based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5  // Mock recommendation logic
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
