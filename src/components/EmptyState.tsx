import React from 'react';
import { Search } from 'lucide-react';

interface EmptyStateProps {
  message: string;
  showSearchIcon?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ message, showSearchIcon = false }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      {showSearchIcon && (
        <div className="mb-4 p-3 bg-gray-100 rounded-full">
          <Search className="h-8 w-8 text-gray-400" />
        </div>
      )}
      <p className="text-gray-500 text-center text-lg">{message}</p>
    </div>
  );
};

export default EmptyState;