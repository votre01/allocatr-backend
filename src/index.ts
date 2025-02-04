import express, { json, Request, Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";
const { Pool } = pg;

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

let pool = new Pool({
    host: "dpg-cu6ktndumphs73cv1ft0-a.oregon-postgres.render.com",
    port: 5432,
    ssl: { rejectUnauthorized: false, },
    user: "allocatr",
    password: "HI8PY1RTI5z5ozhGzG9Iq6BprRgnbxHi",
    database: "allcdb",
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 6000
});

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
app.listen(port, () => {
    console.log(`listening on ${port}`);
});