import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'

import { Router } from 'express'

const router = new Router()

router.get('/', async (_req, res) => {
    try{
        const users = await prisma.user.findMany()
        res.status(200).json({
            users
        })
    } catch(error) {
        res.status(404).json({
            message: "Couldn't retrieve user info from the server"
        })
    }
    
})
    
router.post('/', async (req, res, next) => {
    let values = req.body
    
    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(existingUser){
        return res.status(409).json({
            message:"Email already registered"
        })
    }

    values.password = bcrypt.hashSync(values.password, 8)
    const user = await prisma.user.create({
        data: values
    })
    return res.status(200).json({user})
    
    
})

router.delete('/:id', async (req, res) => {
    try{
        const user = await prisma.user.delete({
            where:{
                id: Number(req.params.id)
            }
        })
        res.status(200).json({
            message: (`User deleted`)
        })
    } catch(error){
        res.status(400).json({
            message: "Couldn't delete user:", error
        })
    }
    
})

export default router