import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            res.setHeader(
                "Set-Cookie", serialize('ACCESS_TOKEN', '', {
                    maxAge: -1,
                    path: '/',
                })
            );
            res.redirect(req.url + '/');
            res.status(300).end();
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: error });
        }
    }
}