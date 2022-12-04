import type { Location } from '@prisma/client';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function addLocation(name: string) {
    return await prisma.location.upsert({
        where: { name: name },
        update: {},
        create: {
            name: name,
        },
    })
}

async function addUser(email: string, name: string) {
    return await prisma.user.upsert({
        where: { email: email },
        update: {},
        create: {
            email: email,
            name: name,
        },
    })
}

async function addSpace(title: string, description: string, location: Location) {
    return await prisma.space.upsert({
        where: {
            title_locationId: {
                title: title,
                locationId: location.id
            }
        },
        update: {},
        create: {
            title: title,
            description: description,
            locationId: location.id
        },
    })
}

async function main() {
    const alice = await addUser('alice@prisma.io', 'Alice')
    const bob = await addUser('bob@prisma.io', 'Bob')

    console.log({ alice, bob })

    const snell = await addLocation("Snell")
    const curry = await addLocation("Curry")

    console.log({ snell, curry })

    const spaces = [
        await addSpace("101", "Office Room", snell),
        await addSpace("102", "Office Room", snell),
        await addSpace("101", "Office Room", curry),
        await addSpace("102", "Office Room", curry),
    ]

    console.log({ spaces })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })