import React, { useState } from 'react';
import { DollarSign, PiggyBank, TrendingUp, Menu } from 'lucide-react';
import Header from './components/Header';
import FinancialTips from './components/FinancialTips';
import BudgetTracker from './components/BudgetTracker';
import SavingsGoals from './components/SavingsGoals';

function App() {
  const [activeTab, setActiveTab] = useState('tips');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <nav className="flex justify-center mb-8">
          <button
            className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'tips' ? 'bg-white text-blue-500' : 'bg-blue-400'}`}
            onClick={() => setActiveTab('tips')}
          >
            <DollarSign className="inline-block mr-2" />
            Tips
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'budget' ? 'bg-white text-blue-500' : 'bg-blue-400'}`}
            onClick={() => setActiveTab('budget')}
          >
            <TrendingUp className="inline-block mr-2" />
            Budget
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-full ${activeTab === 'savings' ? 'bg-white text-blue-500' : 'bg-blue-400'}`}
            onClick={() => setActiveTab('savings')}
          >
            <PiggyBank className="inline-block mr-2" />
            Savings
          </button>
        </nav>
        {activeTab === 'tips' && <FinancialTips />}
        {activeTab === 'budget' && <BudgetTracker />}
        {activeTab === 'savings' && <SavingsGoals />}
      </main>
    </div>
  );
}

export default App;