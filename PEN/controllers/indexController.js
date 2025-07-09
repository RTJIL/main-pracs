import db from "../models/queries.js"

export const getUsernames = async (req, res) => {
    const usernames = await db.getAllUsernames()
    console.log("Usernames: ", usernames)
    res.send("Usernames: " + usernames.map(user => user.username).join())
}

export const showForm = (req, res) => {
    console.log("Getting form...")
    res.render("form")
}

export const postUsername = async (req, res) => {
    const { username } = req.body
    
    console.log("User posted: ", username)

    await db.insertUsername(username)

    res.redirect("/")
}