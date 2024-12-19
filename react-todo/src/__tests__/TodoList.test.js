import { render, fireEvent, screen } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
  // Initial render test
  test('renders correctly with initial todos', () => {
    render(<TodoList />);
    // Check that initial todos are rendered correctly
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo List')).toBeInTheDocument();
  });

  // Test for adding a new todo
  test('can add a new todo', () => {
    render(<TodoList />);
    
    // Simulate typing a new todo and submitting the form
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), {
      target: { value: 'New Todo' },
    });
    fireEvent.click(screen.getByText('Add Todo')); // Ensure 'Add Todo' button is clicked
    
    // Check if the new todo is added to the list
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test for toggling a todo between completed and not completed
  test('can toggle a todo between completed and not completed', () => {
    render(<TodoList />);
    
    // Find the todo item and toggle it
    const todo = screen.getByText('Learn React');
    fireEvent.click(todo); // Toggle to mark as completed
    expect(todo).toHaveStyle('text-decoration: line-through'); // Check if it is crossed out
    
    fireEvent.click(todo); // Toggle again to mark as not completed
    expect(todo).not.toHaveStyle('text-decoration: line-through'); // Check if it is not crossed out
  });

  // Test for deleting a todo
  test('can delete a todo', () => {
    render(<TodoList />);
    
    // Click the delete button of the first todo
    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);
    
    // Verify that the todo is deleted
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });
});
