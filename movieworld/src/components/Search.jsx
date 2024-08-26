import React from 'react'


function Search() {
  return (
    <div>
    <div className="mt-3">
      <form className="search-form d-flex justify-content-center align-items-center">
        <div className="mr-3 d-flex align-items-center">
          <label htmlFor="Search" name="search" className="mt-2"></label>
          <input type="text" name="search" className="form-control mr-2" />
          <button type="button" className="btn btn-primary text-white">Search</button>
        </div>
      </form>
    </div>
  </div>  
  )
}

export default Search
