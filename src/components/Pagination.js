import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-1 px-3 py-1 rounded border ${
            currentPage === number ? 'bg-blue-500 text-white' : ''
          }`}
        >
          {number}
        </button>
      ))}
    </div>
  );
}

export default Pagination;