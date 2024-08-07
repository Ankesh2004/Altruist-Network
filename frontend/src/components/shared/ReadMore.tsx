import React, { useState } from 'react';

type ReadMoreProps = {
    text:string,
    maxLength: number
}

const ReadMore = ({ text, maxLength = 200 }:ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const truncatedText = text.slice(0, maxLength);
  const remainingText = text.slice(maxLength);

  return (
    <div className="relative  mx-auto mt-4 p-4 bg-white rounded shadow">
      <p className="text-gray-800">
        {truncatedText}
        {!isExpanded && text.length > maxLength && (
          <span className="text-gray-400">...</span>
        )}
      </p>

      {text.length > maxLength && (
        <div className="mt-2">
          {isExpanded ? (
            <>
              <p className="text-gray-800">{remainingText}</p>
              <button
                onClick={() => setIsExpanded(false)}
                className="mt-2 text-blue-500 hover:text-blue-700 transition-colors duration-200"
              >
                Read Less
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsExpanded(true)}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              Read More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ReadMore;