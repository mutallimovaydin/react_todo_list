import React, { useState } from 'react';

const AddToDoForm = ({ addTodo }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('Low');
  const [fulfillment, setFulfillment] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      name,
      description,
      category,
      date,
      time,
      priority,
      fulfillment,
    });
    setName('');
    setDescription('');
    setCategory('');
    setDate('');
    setTime('');
    setPriority('Low');
    setFulfillment(0);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full p-2 border rounded" required />
      </div>
      <div>
        <label>Description</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Category</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Date</label>
        <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Time</label>
        <input value={time} onChange={(e) => setTime(e.target.value)} type="time" className="w-full p-2 border rounded" />
      </div>
      <div>
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} className="w-full p-2 border rounded">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Fulfillment</label>
        <input value={fulfillment} onChange={(e) => setFulfillment(e.target.value)} type="range" min="0" max="100" className="w-full" />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">Save</button>
      <button type="reset" className="bg-gray-500 text-white py-2 px-4 rounded mt-4 ml-2">Cancel</button>
    </form>
  );
};

export default AddToDoForm;
