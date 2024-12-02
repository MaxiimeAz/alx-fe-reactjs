import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import RecipeList from './components/RecipeList'; // Import the RecipeList component
import useRecipeStore from './store/recipeStore'; // Import the Zustand store
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
const App = () => {
  // Fetch the recipes from the Zustand store and add them for testing purposes
  const { recipes, setSearchTerm, filterRecipes } = useRecipeStore(state => ({
    recipes: state.recipes,
    setSearchTerm: state.setSearchTerm,
    filterRecipes: state.filterRecipes
  }));

  // Example of adding recipes to the store (this could be done elsewhere, like in an API call)
  useEffect(() => {
    if (recipes.length === 0) {  // Add some sample recipes if the store is empty
      useRecipeStore.setState({
        recipes: [
          { title: 'Spaghetti Bolognese', description: 'A delicious pasta dish with a rich tomato sauce.' },
          { title: 'Chicken Curry', description: 'A spicy and flavorful chicken dish.' },
          { title: 'Vegetable Stir Fry', description: 'A healthy mix of vegetables stir-fried with soy sauce.' }
        ]
      });
    }
  }, [recipes]);

  // Trigger the filterRecipes whenever the recipes or search term changes
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />  {/* The search bar for entering search terms */}
      <RecipeList />  {/* The recipe list that displays filtered recipes */}
    </div>
  );
};

export default App;
