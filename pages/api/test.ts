import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string
}

export default async function test(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    res.status(200).json({ message: 'next js api' })
}