# Detailed Component Structure

This document provides a detailed breakdown of each component's responsibilities, props, and internal state.

---

### `App.jsx`

This is the root component of the application. It acts as the main container and is responsible for managing the global state and the core logic.

-   **Responsibilities**:
    -   Manages the global list of `todos` in its state.
    -   Manages the current `filter` state (e.g., 'all', 'active', 'completed').
    -   Contains the handler functions for adding, updating, deleting, and toggling the completion status of tasks. These functions will be passed down as props to child components.
    -   Renders all other major components (`Header`, `TodoForm`, `Filter`, `TodoList`, `Footer`).
    -   Handles persistence by reading from and writing to the browser's Local Storage.
-   **State**:
    -   `todos`: An array of to-do objects. `[{ id, title, description, completed }, ...]`
    -   `filter`: A string that determines which tasks to display.
-   **Props**: None.

---

### `Header.jsx`

A simple presentational component for the application's title.

-   **Responsibilities**:
    -   Displays the application's title or logo.
-   **State**: None.
-   **Props**:
    -   `title` (string): The text to be displayed as the header title.

---

### `TodoForm.jsx`

A form component that allows users to create and add new tasks.

-   **Responsibilities**:
    -   Render a form with an `input` field for the task title and optionally a `textarea` for the description.
    -   Manage the state of the input fields.
    -   On form submission, it should call the `onAddTask` function passed in its props with the new task's details.
    -   Clear the input fields after a task is successfully added.
-   **State**:
    -   `title` (string): The current value of the task title input field.
    -   `description` (string, optional): The current value of the task description field.
-   **Props**:
    -   `onAddTask` (function): A callback function passed from `App.jsx` to add a new task to the `todos` list.

---

### `TodoList.jsx`

Renders the list of to-do items based on the current filter.

-   **Responsibilities**:
    -   Receive the full list of `todos` and the current `filter` from `App.jsx`.
    -   Filter the `todos` array based on the `filter` prop.
    -   Map over the filtered list and render a `TodoItem` component for each task.
    -   Pass down the necessary props (the `todo` object and event handlers) to each `TodoItem`.
-   **State**: None.
-   **Props**:
    -   `todos` (array): The complete list of to-do items.
    -   `filter` (string): The current filter setting ('all', 'active', 'completed').
    -   `onToggleComplete` (function): Callback passed down to `TodoItem`.
    -   `onDeleteTask` (function): Callback passed down to `TodoItem`.
    -   `onUpdateTask` (function): Callback passed down to `TodoItem`.

---

### `TodoItem.jsx`

Represents a single task in the to-do list, displaying its information and controls for interaction.

-   **Responsibilities**:
    -   Display the task's title and description.
    -   Provide controls (e.g., checkbox, buttons) to mark the task as complete, delete it, or enter edit mode.
    -   Conditionally render an edit form (e.g., an input field) when in "edit mode".
    -   Visually distinguish a completed task (e.g., using a line-through style).
    -   Call the appropriate handler functions (`onToggleComplete`, `onDeleteTask`, `onUpdateTask`) from props when the user interacts with the controls.
-   **State**:
    -   `isEditing` (boolean): Toggles the view between displaying the task and editing it.
    -   `editedTitle` (string): Holds the value of the task title while in edit mode.
-   **Props**:
    -   `todo` (object): The specific to-do object this component represents.
    -   `onToggleComplete` (function): A callback to toggle the task's `completed` status.
    -   `onDeleteTask` (function): A callback to remove the task.
    -   `onUpdateTask` (function): A callback to save the changes after editing.

---

### `Filter.jsx`

A component that provides UI for filtering the list of tasks.

-   **Responsibilities**:
    -   Render filter controls (e.g., "All", "Active", "Completed" buttons).
    -   Visually indicate which filter is currently active.
    -   When a filter option is clicked, it should call the `onSetFilter` function from its props with the new filter value.
-   **State**: None.
-   **Props**:
    -   `currentFilter` (string): The currently selected filter.
    -   `onSetFilter` (function): A callback from `App.jsx` to update the `filter` state.

---

### `Footer.jsx` (Optional)

A simple component to display summary information about the tasks.

-   **Responsibilities**:
    -   Display a count of how many tasks are left to be completed.
    -   Could potentially house a "Clear Completed" button.
-   **State**: None.
-   **Props**:
    -   `activeTaskCount` (number): The number of tasks that are not yet completed. 