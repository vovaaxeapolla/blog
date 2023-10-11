import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { serialize } from "cookie";
import UserDto from "../../../dtos/UserDto";
import { RowDataPacket } from "mysql2/promise";
import pool from "../../../utils/db";

interface Candidate extends RowDataPacket {
    id: string
    email: string
    login: string
    password: string
}

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

            const { email, password } = req.body;

            const candidate = (await pool.query<Candidate[]>(`SELECT * FROM accounts WHERE email = '${email}'`))[0];

            if (!candidate[0]) {
                throw 'Пользователь не найден';
            }

            const equal = await bcrypt.compare(password, candidate[0].password)

            if (!equal) {
                throw 'Неверный пароль';
            }

            const user: User = candidate[0]

            const token = jwt.sign(user as object, process.env.ACCESS_TOKEN as jwt.Secret);

            res.setHeader('Set-Cookie', serialize('ACCESS_TOKEN', token, {
                path: '/',
                httpOnly: true,
                sameSite: true,
                maxAge: 60 * 60 * 24 * 7
            }));

            res.status(200).json({ user: new UserDto({ ...user, isAuth: true }) });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error });
        }
    }
}