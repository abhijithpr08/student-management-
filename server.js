import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import path from "path";


dotenv.config();
connectDB();

const app = express();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

//  REQUIRED 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  static files 
app.use(express.static("public"));

//  routes 
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/`)
});
