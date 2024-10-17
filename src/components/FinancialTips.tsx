import React from 'react';
import { Lightbulb } from 'lucide-react';

const tips = [
  'Create a budget and stick to it',
  'Set up an emergency fund',
  'Pay off high-interest debt first',
  'Start investing early for retirement',
  'Use cashback credit cards responsibly',
];

const FinancialTips: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Lightbulb className="mr-2 text-yellow-500" />
        Mey chutiya hu Tips
      </h2>
      <ul className="space-y-4">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 font-bold mr-2">{index + 1}.</span>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancialTips;
