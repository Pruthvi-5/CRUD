import React from "react";
import "./Home.css"; 
import { Link } from "react-router-dom";
const Home = () => {
    const image=require("../images/image.avif");
  return (
    <div className="Home-Page bg-dark text-white conatiner-fluid d-flex justify-content-center align-items-center">
        <div className="row container">
            <div
            className="col-lg-6 d-flex justify-content-center align-items-start flex-column"
            style={{ height:"91.5vh"}}>

               <h2 style={{fontSize:"80px"}}>BOOK STORE</h2>
               <h3 style={{fontSize:"50px"}}>FOR YOU </h3>
               <p className="mb-0" style={{color:"silver"}} >
                 CHECKOUT THE BOOKS FROM HERE</p>
               <Link to="/books" className="viewBook my-3">View Books </Link>
             
            </div>
            
            <div
            className="col-lg-6 d-flex justify-content-center align-items-end flex-column"
            style={{ height: "91.5vh" }}
>
    <img
      className="img-fluid homeImg"
      src="https://img.freepik.com/premium-vector/cute-little-girl-writing-at-school_951778-43587.jpg?semt=ais_hybrid&w=740"
      alt="/"
    />
</div>
        </div>

    </div>
  );
};

export default Home;