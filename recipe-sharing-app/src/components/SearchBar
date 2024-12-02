import React from 'react';
import useRecipeStore from '../store/recipeStore';

const SearchBar = () => {
  const { setSearchTerm, filterRecipes } = useRecipeStore((state) => ({
    setSearchTerm: state.setSearchTerm,
    filterRecipes: state.filterRecipes,
  }));

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterRecipes();
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearchChange}
      style={{ padding: '8px', width: '100%', marginBottom: '16px' }}
    />
  );
};

export default SearchBar;
