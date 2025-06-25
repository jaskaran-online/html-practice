# To-Do App UI Mockup

This mockup provides a visual representation of the to-do application's user interface. It shows the layout of all the major components on the screen.

```
+-----------------------------------------------------------------+
|  To-Do App                                                      |
+-----------------------------------------------------------------+
|                                                                 |
|   +---------------------------------------+  +---------------+  |
|   | Enter a new task...                   |  |   Add Task    |  |
|   +---------------------------------------+  +---------------+  |
|                                                                 |
|   +-----------+   +-----------+   +-----------+                 |
|   |    All    |   |  Active   |   | Completed |                 |
|   +-----------+   +-----------+   +-----------+                 |
|                                                                 |
+-----------------------------------------------------------------+
|                                                                 |
|  [x] ~~Buy groceries~~                      [Edit] [Delete]   |
|      - Milk, Bread, Cheese                                      |
|  -------------------------------------------------------------  |
|  [ ] Walk the dog                           [Edit] [Delete]   |
|      - Morning walk at the park                                 |
|  -------------------------------------------------------------  |
|  [ ] Finish project report                  [Edit] [Delete]   |
|      - Due by Friday                                            |
|  -------------------------------------------------------------  |
|                                                                 |
|                                                                 |
+-----------------------------------------------------------------+
|  2 tasks left                                                   |
+-----------------------------------------------------------------+
```

### Component Breakdown:

1.  **Header**: The top bar with the title "To-Do App".
2.  **TodoForm**: The input field and the "Add Task" button.
3.  **Filter**: The "All", "Active", and "Completed" buttons.
4.  **TodoList**: The container for the list of tasks.
5.  **TodoItem**: Each individual task item, including:
    -   A checkbox to toggle completion.
    -   The task title (and optional description).
    -   Strikethrough styling for completed tasks.
    -   "Edit" and "Delete" buttons.
6.  **Footer**: The bottom bar showing the count of active tasks. 