import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import submissionRoutes from "./routes/submissionRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";
import path from 'path';

dotenv.config();

const app = express();

const __dirname = path.resolve();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error Connecting MongoDB", err));

app.use("/api/submissions", submissionRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
})


app.use(cookieParser());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
