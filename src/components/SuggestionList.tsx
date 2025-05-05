
import React from "react";

interface SuggestionListProps {
  onSuggestionClick: (planName: string) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({ onSuggestionClick }) => {
  const suggestions = [
    { id: 1, name: "Blue Cross Gold Plan" },
    { id: 2, name: "Aetna Basic Coverage" },
    { id: 3, name: "UnitedHealth Family Plan" },
    { id: 4, name: "Kaiser Premium Plan" },
    { id: 5, name: "Cigna Individual Coverage" },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion.id}
          onClick={() => onSuggestionClick(suggestion.name)}
          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors text-sm font-medium"
        >
          {suggestion.name}
        </button>
      ))}
    </div>
  );
};

export default SuggestionList;
