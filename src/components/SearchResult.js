import React from "react";
import "./SearchResult.css";
import pointIcon from './images/Vector 2.png';
import StarRating from "./StarRating";

//Some changes made here

function SearchResult({data}) {

  const { title:internshipName, company, rating, paid, location } = data;
  

  return (
    <div className="listingBox"
      style={{
        width: "307px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent:"center",
        gap:"3%",
      }}>
      <div style={{display: "flex", flexDirection:"column", alignItems:"center", gap: "6px"}}>
        <img src={company.logo} alt={company.title} ></img>
        <h1 style={{ fontSize: "15px", margin: "0px", padding: "0px" }}>{internshipName}</h1>
        <h2 style={{ fontSize: "12px", margin: "0px", padding: "0px" }}>
          {company.title}
        </h2>
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"5px"}}>
        <StarRating rating={rating}/> <p style={{fontFamily:"Roboto-Regular", fontSize:"14px"}}>{rating}</p>
      </div>
      <div style={{display:"flex", flexDirection:"column", gap: "17px"}}>
        <div className='supRow' style={{ display: "flex", flexDirection: "row" }}>
          <img src={pointIcon}></img>
          <div className='text'>{location}</div>
        </div>
        <div className='supRow' style={{ display: "flex", flexDirection: "row" }}>
          <img src={pointIcon}></img>
          <div className='text'>{paid ? "Paid":"Unpaid"}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
