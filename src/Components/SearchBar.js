import React, {useState} from "react";

const SearchBar=()=> {
  const [searchQuery, setSearchQuery]=useState('')
 const  searchMovie = (e) => {
  setSearchQuery( e.target.value );
  };
  const handleSubmit=(e)=>{
      e.preventDeafult()
  }
 
    return (
      <form onSubmit={handleSubmit} >
        <div className="form-row mb-5">
          <div className="col-12">
            <input
              onChange={searchMovie}
              type="text"
              placeholder="Search"
              className="form-control"
             value={searchQuery}
            />
          </div>
        </div>
      </form>
    );
  
}
export default SearchBar;
