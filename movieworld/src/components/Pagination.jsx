import React from 'react';
import { Link } from 'react-router-dom';

function Pagination() {
  
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link text-dark" to="/">Previous</Link>
          </li>
          <li className="page-item">
            <Link className="page-link text-danger" to="/">1</Link>
          </li>
          <li className="page-item">
            <Link className="page-link text-danger" to="/">2</Link>
          </li>
          <li className="page-item">
            <Link className="page-link text-danger" to="/">3</Link>
          </li>
          <li className="page-item">
            <Link className="page-link text-dark" to="/">Next</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
