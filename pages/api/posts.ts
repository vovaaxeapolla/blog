import { NextApiRequest, NextApiResponse } from "next";
import mysql from 'mysql2/promise';


interface Post extends mysql.RowDataPacket {
    id: string
    title: string
    text: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    try {
        const connection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DATABASE,
            password: process.env.MYSQL_PASSWORD
        });

        const [rows] = await connection.execute<Post[]>('SELECT * FROM posts');
        await connection.end()
        return res.status(200).json(rows);
    } catch (error) {
        console.log('Упала база данных');
    }
}