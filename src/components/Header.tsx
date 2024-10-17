import React from 'react';
import { DollarSign, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <DollarSign className="text-white mr-2" size={32} />
          <h1 className="text-2xl font-bold text-white">FinanceGuide</h1>
        </div>
        <button className="text-white">
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;