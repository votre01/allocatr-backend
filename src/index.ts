import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./database/connection";
import routes from "./routes/index"

const app = express();

dotenv.config();

const corsOptions = {
    origin: ["http://localhost:5173"],
}

app.use(cors());
app.use(express.json());

app.use("/api/v1", routes);

pool
    .connect()
    .then(() => console.log("db connected successfully"))
    .catch((error) => console.error("Database connection: ", error));

const port = process.env.PORT
app.listen(port, () => console.log(`Server started on ${port}`));