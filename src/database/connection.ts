import { createPool, Pool } from 'mysql2/promise';

export const connect = async (): Promise<Pool> => {
    
    console.log(`CONNECTING TO DATA BASE`)

    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'eurMYSQL89',
        database: 'social_media',
        connectionLimit: 10
    });
    
    console.log(`CONNECTED TO DATA BASE2`)

    return connection;

}