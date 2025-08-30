import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.SERVER_PORT || 8085;

const app = express();

app.get("/",(req,res)=>{
  res.send("This is first route")
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
