import React, { useState } from 'react';
import { Target, Plus } from 'lucide-react';

interface SavingsGoal {
  name: string;
  target: number;
  current: number;
}

const SavingsGoals: React.FC = () => {
  const [goals, setGoals] = useState<SavingsGoal[]>([
    { name: "Emergency Fund", target: 5000, current: 2000 },
    { name: "Vacation", target: 3000, current: 1500 },
  ]);

  const [newGoal, setNewGoal] = useState({ name: "", target: 0 });

  const addGoal = () => {
    if (newGoal.name && newGoal.target > 0) {
      setGoals([...goals, { ...newGoal, current: 0 }]);
      setNewGoal({ name: "", target: 0 });
    }
  };

  return (
    <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Target className="mr-2 text-purple-500" />
        Savings Goals
      </h2>
      <div className="space-y-4">
        {goals.map((goal, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded">
            <h3 className="text-xl font-semibold mb-2">{goal.name}</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-600">Target: ${goal.target}</p>
                <p className="text-sm text-gray-600">Current: ${goal.current}</p>
              </div>
              <div className="w-1/2 bg-gray-300 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${(goal.current / goal.target) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center">
          <Plus className="mr-2 text-green-500" />
          Add New Goal
        </h3>
        <input
          type="text"
          placeholder="Goal Name"
          value={newGoal.name}
          onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="number"
          placeholder="Target Amount"
          value={newGoal.target}
          onChange={(e) => setNewGoal({ ...newGoal, target: Number(e.target.value) })}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={addGoal}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Add Goal
        </button>
      </div>
    </div>
  );
};

export default SavingsGoals;