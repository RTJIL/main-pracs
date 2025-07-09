import db from "../models/queries.js"

export const getUsernames = async (req, res) => {
    const searchTerm = req.query.search
    
    if(searchTerm) {
        const filteredUsernames = await db.getUsernameBy(searchTerm)
        res.send("Usernames: " + filteredUsernames.map(user => user.username).join())
        return
    }
    
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

export const getUsernameParam = async (req, res) => {
    const { usernameId } = req.params

    const filteredUsernames = await db.getUsernameBy(usernameId)

    res.send("Usernames: " + filteredUsernames.map(user => user.username).join())
}

export const deleteUsernames = async (req, res) => {
    db.deleteAllUsernames();

    console.log("All users deleted.")
    res.redirect("/")
}