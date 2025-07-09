import { Router } from "express"
import { getUsernames, showForm, postUsername } from "../controllers/indexController.js";

import { body, validationResult } from "express-validator"


export const indexRouter = Router();

indexRouter.get("", getUsernames)

indexRouter.get("/new", showForm)
indexRouter.post("/new", postUsername)