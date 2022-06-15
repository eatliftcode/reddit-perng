import {MikroORM} from "@mikro-orm/core"


const main = async () => {
    const orm = await MikroORM.init({
        dbName: 'redditdb',
        type: 'postgresql',
        debug: process.env.NODE_EVN !== 'production'
    });
}

main();