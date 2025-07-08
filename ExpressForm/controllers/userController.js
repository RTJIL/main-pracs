// controllers/usersController.js
import userStorage from "../storages/usersStorage.js"
import { body, validationResult } from "express-validator"

const alphaErr = "must only contain letters."
const lengthErr = "must be between 1 and 10 characters."

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`First name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`Last name ${lengthErr}`),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email format, must be sample@sample.sample"),
  body("age")
    .trim()
    .isInt({ min: 18, max: 140 })
    .withMessage("Age must be a number between 18 and 140"),
  body("bio").isLength({ max: 200 }),
]

export const usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: userStorage.getUsers(),
  })
}

export const usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  })
}

export const usersSearchList = (req, res) => {
  const { firstName, email } = req.query
  const allUsers = userStorage.getUsers()

  let filteredUsers = []

  if (firstName || email) {
    filteredUsers = allUsers.filter((user) => {
      const nameMatch = firstName
        ? user.firstName.toLowerCase().includes(firstName.toLowerCase())
        : true
      const emailMatch = email
        ? user.email.toLowerCase().includes(email.toLowerCase())
        : true
      return nameMatch && emailMatch
    })
  }

  res.render("searchUser", {
    title: "Search User",
    users: filteredUsers,
  })
}

export const usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      })
    }
    const { firstName, lastName, email, age, bio } = req.body
    userStorage.addUser({ firstName, lastName, email, age, bio })
    res.redirect("/")
  },
]

export const usersUpdateGet = (req, res) => {
  const user = userStorage.getUser(req.params.id)
  res.render("updateUser", {
    title: "Update user",
    user: user,
  })
}

export const usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = userStorage.getUser(req.params.id)
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      })
    }
    const { firstName, lastName, email, age, bio } = req.body
    userStorage.updateUser(req.params.id, {
      firstName,
      lastName,
      email,
      age,
      bio,
    })
    res.redirect("/")
  },
]

export const usersDeletePost = (req, res) => {
  userStorage.deleteUser(req.params.id)
  res.redirect("/")
}
