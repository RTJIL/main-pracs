import { pool } from "../db/db.js"

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function getUsernameBy(id) {
  const { rows } = await pool.query(`SELECT * FROM usernames WHERE username LIKE $1`, [`${String(id).toLowerCase()}%`])
  return rows;
}

async function deleteAllUsernames() {
  await pool.query('TRUNCATE TABLE usernames RESTART IDENTITY')
}

export default {
  getAllUsernames,
  insertUsername,
  getUsernameBy,
  deleteAllUsernames
};
