import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import { routes } from "./routes/index.js";


const app = express();

app.use(cors({
  origin:true, 
  credentials:true 
}));
app.use(cookieParser());
app.use(express.json());

app.use(routes);

app.listen(8800, () => {
  console.log("Express server listening 8800");
})