// routes/usersRouter.js
import { Router } from "express"
import {
  usersCreateGet,
  usersListGet,
  usersCreatePost,
  usersUpdateGet,
  usersUpdatePost,
  usersDeletePost,
  usersSearchList,
} from "../controllers/userController.js"

export const usersRouter = Router()

usersRouter.get("/", usersListGet)
usersRouter.get("/create", usersCreateGet)
usersRouter.post("/create", usersCreatePost)

usersRouter.get("/:id/update", usersUpdateGet)
usersRouter.post("/:id/update", usersUpdatePost)
usersRouter.post("/:id/delete", usersDeletePost)

usersRouter.get("/search", usersSearchList)
