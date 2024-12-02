import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: "Spaghetti Bolognese", ingredients: ["spaghetti", "meat"], time: 30 },
    { id: 2, title: "Grilled Cheese", ingredients: ["bread", "cheese"], time: 10 },
    // Add more sample recipes
  ],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
