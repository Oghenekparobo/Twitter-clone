// this are my centralized functions for getting data out of the database


// function to get tweets from the database

export const getTweets = async (prisma) =>{ 
    return await prisma.tweet.findMany({
        where: {},
        orderBy: [
            {
                id: 'desc',
            },
        ],
        include:{ 
            author:true,
        }
    })
}
