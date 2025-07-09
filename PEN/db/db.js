import { Pool } from "pg"

export const pool = new Pool({
    host: "localhost",
    user: "rtjil",
    database: "top_users",
    password: "125364",
    port: 5432
})