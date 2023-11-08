import React from "react";

//Some changes made here

function SearchResult() {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "40px", height: "40px", backgroundColor: "grey" }}>
        logo
      </div>
      <h1 style={{ fontSize: "16px", margin: "0px", padding: "0px" }}>Title</h1>
      <h2 style={{ fontSize: "12px", margin: "0px", padding: "0px" }}>
        Subtitle
      </h2>
      <div style={{ width: "60%", height: "20px", backgroundColor: "grey" }}>
        Stars
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Thing 1</div>
        <div>THing 2</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Thing 3</div>
        <div>THing 4</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>Thing 5</div>
        <div>THing 6</div>
      </div>
    </div>
  );
}

export default SearchResult;
