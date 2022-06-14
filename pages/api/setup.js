import { getSession } from "next-auth/react"
import prisma from "lib/prisma"
// api function to set username


const handler = async (req , res) =>{ 
    const session = await getSession({req})
    if(!session) return res.end()

    if(req.method === 'POST'){
        await prisma.user.update({
            where: {email: session.user.email},
            data:{
                name:req.body.name
            }
        })

        res.end()
    }

}

export default handler