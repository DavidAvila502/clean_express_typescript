import "dotenv/config";
import { createPool } from "mysql2/promise";

const host = process.env.DB_HOST || "localhost";
const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306;
const user = process.env.DB_USER || "root";
const password = process.env.DB_PASSWORD;
const database = process.env.DATABASE;

const pool = createPool({
   host: host,
   port: port,
   user: user,
   password: password,
   database: database,
});

export default pool;
