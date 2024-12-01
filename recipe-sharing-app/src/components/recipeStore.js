import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) || 
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase()) // Filtering by title and description
    )
  })),
  // You can expand this to include other filters such as ingredients or preparation time
}));
