import express from "express";
import connectDb from "./utils/connectDb.js";
import user from "./router/user.router.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const corsOption = {
  origin: ["http://localhost:5173"],
  credentials: true,
};
app.use(cors(corsOption));

app.use(express.json());
app.use("/api", user);

app.listen(5000, () => {
  connectDb();
  console.log("Server is listiong port number 5000");
});
