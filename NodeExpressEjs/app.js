import express from "express"
import path from "node:path"
import fs from "node:fs/promises"

const app = express()

const __dirname = import.meta.dirname

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
]

const users = ["Rose", "Cake", "Biff"]

const info = ["some info", "some info", "some info", "some info"]

const assetsPath = path.join(__dirname, "public")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.static(assetsPath))

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users })
})

app.get("/about", (req, res) => {
  res.render("about/about", { links: links })
})

const PORT = 8000
app.listen(PORT, () => {
  console.log("Server started on port: ", PORT)
})
