import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
    let seed = {}
    const seed_password = '123'

    seed.user = await prisma.user.create({
        data: {
            name: 'Luciano',
            surname: 'Abreu',
            email: 'luciano@gmail.com',
            password: bcrypt.hashSync(seed_password, 8),
            cpf:'111.111.111-11',
            followingNews: true,
            followingSales: false,
            city:'Joinville',
            state:'SC',
            cep:'11111-111',
            fullAddress:'Rua X',
            addressNumber:'123'
        },
    })

    console.log({ seed })
    console.log('Default user password is', seed_password)
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })