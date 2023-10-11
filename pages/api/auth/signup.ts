import { NextApiRequest, NextApiResponse } from "next";
import pool from "../../../utils/db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";
import UserDto from "../../../dtos/UserDto";
import { RowDataPacket } from "mysql2/promise";

interface User extends RowDataPacket {
    id: string
    email: string
    login: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        try {

            const { email, login, password } = req.body;

            const candidate = await pool.query<User[]>(`SELECT * FROM accounts WHERE email = '${email}' OR login = '${login}'`)[0];

            if (candidate.length === 0)
                throw 'Имя пользователя или почта уже заняты'

            const hashPassword = await bcrypt.hash(password, 10);

            await pool.query(`INSERT INTO accounts (email, login, password) VALUES ('${email}','${login}','${hashPassword}')`);

            const user = await pool.query<User[]>(`SELECT * FROM accounts WHERE email = '${email}'`)[0];

            const token = jwt.sign(user as object, process.env.ACCESS_TOKEN as jwt.Secret);

            res.setHeader('Set-Cookie', serialize('ACCESS_TOKEN', token, {
                path: '/',
                httpOnly: true,
                sameSite: true,
                maxAge: 60 * 60 * 24 * 7
            }));

            res.status(200).json({ user: new UserDto({ ...user, isAuth: true }) });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }
}