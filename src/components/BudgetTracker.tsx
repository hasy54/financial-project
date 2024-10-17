import React, { useState } from 'react';
import { DollarSign, PieChart } from 'lucide-react';

const BudgetTracker: React.FC = () => {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const remaining = income - expenses;

  return (
    <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <PieChart className="mr-2 text-blue-500" />
        Budget Tracker
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block mb-2">Monthly Income</label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">Monthly Expenses</label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="bg-gray-100 p-4 rounded">
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            <DollarSign className="mr-2 text-green-500" />
            Remaining Budget
          </h3>
          <p className={`text-2xl font-bold ${remaining >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            ${remaining.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;