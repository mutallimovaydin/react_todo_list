import React, { useState } from 'react';

const ToDoList = ({ todos, setTodos }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTodo, setEditingTodo] = useState({});

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingTodo(todos[index]);
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleSaveEdit = () => {
    const updatedTodos = todos.map((todo, i) =>
      i === editingIndex ? editingTodo : todo
    );
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const handleChange = (e) => {
    setEditingTodo({
      ...editingTodo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <div className="flex justify-between mb-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Add a new to-do</button>
        <div>
          <button className="bg-blue-300 text-white py-2 px-4 rounded">All</button>
          <button className="bg-blue-300 text-white py-2 px-4 rounded ml-2">To-do</button>
          <button className="bg-blue-300 text-white py-2 px-4 rounded ml-2">Completed</button>
        </div>
      </div>

      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No to-dos available. Please add a new task.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Category</th>
              <th>When</th>
              <th>Priority</th>
              <th>Fulfillment</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index} className="text-center">
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={editingTodo.name}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    todo.name
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="description"
                      value={editingTodo.description}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    todo.description
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="category"
                      value={editingTodo.category}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    />
                  ) : (
                    todo.category
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <>
                      <input
                        type="date"
                        name="date"
                        value={editingTodo.date}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                      <input
                        type="time"
                        name="time"
                        value={editingTodo.time}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                      />
                    </>
                  ) : (
                    `${todo.date} ${todo.time}`
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <select
                      name="priority"
                      value={editingTodo.priority}
                      onChange={handleChange}
                      className="w-full p-2 border rounded"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  ) : (
                    todo.priority
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="range"
                      name="fulfillment"
                      value={editingTodo.fulfillment}
                      onChange={handleChange}
                      min="0"
                      max="100"
                      className="w-full"
                    />
                  ) : (
                    `${todo.fulfillment}%`
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <>
                      <button
                        className="bg-green-500 text-white py-1 px-2 rounded"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 text-white py-1 px-2 rounded ml-2"
                        onClick={() => setEditingIndex(null)}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-yellow-500 text-white py-1 px-2 rounded"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white py-1 px-2 rounded ml-2"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ToDoList;
