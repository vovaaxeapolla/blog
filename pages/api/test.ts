import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string
}

export default async function test(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const { rows } = await sql`SELECT * FROM posts`;
    console.log(rows);
    res.status(200).json({ message: JSON.stringify(rows) })
}