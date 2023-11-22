import React from "react";
import "./SearchPage.css";
import SearchResult from "../components/SearchResult";
import {useState} from "react";

//Some changes made here
let searchResults = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function SearchPage() {

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:8000/api/internships/search/?query=${query}`);
      const data = await response.json();
      console.log(data)
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="searchPage">
      <div className="sideBar">
        <div>Thing</div>
        <div>Thing</div>
        <div>Thing</div>
        <div>Thing</div>
      </div>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <div className="searchBar">SearchBar</div>
        <button onClick={()=>{handleSearch("")}}>Hi</button>
        <div style={{ alignSelf: "flex-end" }}>sort by</div>
        <div className="results">
          {searchResults.map((searchResult) => (
            <SearchResult />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
