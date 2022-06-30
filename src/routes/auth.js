import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'

import { Router } from 'express'

const router = new Router()

//login
router.post('/', async (req, res) => {
    const values = req.body
    const user = await prisma.user.findUnique({
        where: {
            email: values.email
        }
    })

    if(!user){
        res.status(401).json({
            alert:'Email address or password not valid'
        }) 
    }else{
        const passwordsMatch = bcrypt.compareSync(values.password, user.password)
        
        if(!passwordsMatch){
            res.status(401).json({
                alert:'Email address or password not valid'
            }) 
        } else{
            res.status(200).json({
                user
                
            })
        }
        
    }

    
    

})

export default router