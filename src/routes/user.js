import { Router } from 'express'
import UserController from '../controllers/user.js'

const router = new Router()

router.get('/', UserController.getAllUsers)

export default router