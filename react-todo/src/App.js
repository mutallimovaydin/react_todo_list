import './App.css';

function App() {
  return (
    <div className="App">
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-400 to-blue-800">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">React To-Do List</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name:</label>
            <input
              type="text"
              placeholder="name for the task you're going to do"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <input
              type="text"
              placeholder="a short description of the task - can be omitted"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <input
              type="text"
              placeholder="e.g., household, school, work"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date:</label>
            <input
              type="date"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Time:</label>
            <input
              type="time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Priority:</label>
            <select className="w-full px-4 py-2 border rounded-lg focus:outline-none">
              <option>Select from dropdown</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Fulfillment:</label>
            <input type="range" className="w-full" />
          </div>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">Save</button>
            <button className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg">Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default App;
