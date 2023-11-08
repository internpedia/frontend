import React from "react";
import "./SearchPage.css";
import SearchResult from "../components/SearchResult";

//Some changes made here
let searchResults = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function SearchPage() {
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
