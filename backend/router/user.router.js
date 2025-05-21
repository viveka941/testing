
import express from 'express'
import { allUser, register } from '../controllers/user.controller.js'

const router = express.Router()

router.route("/user").post(register)
router.route("/allUser").get(allUser)

export default router