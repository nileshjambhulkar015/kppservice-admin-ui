import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationComponent =  ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (page) => {
      if (page > 0 && page <= totalPages) {
        onPageChange(page);
      }
    };
  
    const renderPaginationItems = () => {
      let items = [];
  
      for (let page = 1; page <= totalPages; page++) {
        items.push(
          <Pagination.Item
            key={page}
            active={page === currentPage}
            onClick={() => handleClick(page)}
          >
            {page}
          </Pagination.Item>
        );
      }
  
      return items;
    };
  
    return (
      <Pagination>
        <Pagination.First onClick={() => handleClick(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1} />
        {renderPaginationItems()}
        <Pagination.Next onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => handleClick(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
      
    );
  };

export default PaginationComponent;