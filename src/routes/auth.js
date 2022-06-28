import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'

import { Router } from 'express'

const router = new Router()

router.get('/', (req,res)=>{
    res.send('Auth!')
})

export default router