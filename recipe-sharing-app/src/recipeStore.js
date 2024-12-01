import create from 'zustand';

const useRecipeStore = create(set => ({
  // Store for all recipes (initially an empty array)
  recipes: [],

  // Store for the search term entered by the user (initially empty)
  searchTerm: '',

  // Action to update the search term in the store
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Store for filtered recipes (initially an empty array)
  filteredRecipes: [],

  // Action to filter recipes based on the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export default useRecipeStore;
