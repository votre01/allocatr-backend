import express, { Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./database/connection";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

pool
    .connect()
    .then(() => console.log("db connected successfully"))
    .catch((err) => console.error("Database connection: ", err));



const getUser = async () => {
    let client;
    try {
        client = await pool.connect();
        const result = await client.query(
            'SELECT * FROM profile',
        );
        if (result.rowCount) {
            return result;
        }
    } catch (err) {
        throw err;
    } finally {
        if (client) client.release();
    }
}

app.get("/", (request: Request, response: Response) => {
    // getUser().then((result) => response.json(result?.rows[0]));
    getUser().then((result) => response.json(result?.rows));
    // response.json({ message: "Hello from allocatr" });
});

const port = process.env.PORT
app.listen(port, () => console.log(`Server started on ${port}`));