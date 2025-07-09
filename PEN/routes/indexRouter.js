import { Router } from "express"
import { getUsernames, showForm, postUsername, getUsernameParam, deleteUsernames } from "../controllers/indexController.js";

import { body, validationResult } from "express-validator"


export const indexRouter = Router();

indexRouter.get("/", getUsernames)
indexRouter.get("/delete", deleteUsernames)

indexRouter.get("/new", showForm)
indexRouter.post("/new", postUsername)

indexRouter.get("/:usernameId", getUsernameParam)