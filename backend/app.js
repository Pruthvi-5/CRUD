const express=require("express");
const app=express();
const cors=require("cors");
const booksRoute=require("./router/booksRoute");
require("./connection/connection");
app.use(cors());
app.use(express.json());
app.use("/api/v1/",booksRoute);





app.listen(1000,()=>{
    console.log("SERVER STARTED SUCCESSFULLY");
});
