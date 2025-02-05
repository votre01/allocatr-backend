import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./database/connection";
import routes from "./routes/index"

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/v1", routes);

pool
    .connect()
    .then(() => console.log("db connected successfully"))
    .catch((err) => console.error("Database connection: ", err));

const port = process.env.PORT
app.listen(port, () => console.log(`Server started on ${port}`));