// recipeStore.js
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Array to store all recipes
  searchTerm: '', // Search term from the user input
  setSearchTerm: (term) => set({ searchTerm: term }), // Action to set the search term
  filteredRecipes: [], // Array to store filtered recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) || // Match by title
      recipe.ingredients.some(ingredient => // Match by ingredient
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    )
  })),
}));

export default useRecipeStore;
