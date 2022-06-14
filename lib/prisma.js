// this is imported anytime i need to use prisma

import { PrismaClient } from '@prisma/client'

let global = {}

const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV === 'development') global.prisma = prisma

export default prisma