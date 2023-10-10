import { NextApiRequest, NextApiResponse } from "next";
import mysql from 'mysql2';
import { promisify } from "util";

type Post = {
    id: string
    title: string
    text: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Post[]>
) {
    try {
        const connection = mysql.createConnection({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            database: process.env.MYSQL_DATABASE,
            password: process.env.MYSQL_PASSWORD
        });
        const query = promisify(connection.query).bind(connection);
        const rows = await query('SELECT * FROM posts');
        return res.status(200).json(rows);
    } catch (error) {
        console.log('Упала база данных');
    }
}