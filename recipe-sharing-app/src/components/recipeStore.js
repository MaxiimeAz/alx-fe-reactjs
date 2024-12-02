import { create } from 'zustand';
import create from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  addFavorite: (recipeId) =>
    set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set(state => ({
      favorites: state.favorites.filter(id => id !== recipeId),
    })),
  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(
        recipe =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
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
