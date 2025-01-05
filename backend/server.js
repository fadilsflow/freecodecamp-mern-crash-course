import express from "express";
import env from "dotenv";
const app = express();


const hello =  hello => (hello * hello)
hello(12,3)
console.log(hello)
console.log(process.env.MONGO_URL)
app.listen(4000, () => {
  console.log("server started at http://localhost:4000 hai from fadil");
});

