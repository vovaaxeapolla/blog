import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken';
import { UserDtoType } from './dtos/UserDto';

interface AuthenticatedRequest extends NextRequest {
    user: {
        isAuth: boolean
        login: string
    };
}

export default async function middleware(req: NextRequest, res: NextResponse) {
    try {

        if (req.url.includes('/portfolio')) {

            const token = req.cookies.get('ACCESS_TOKEN');
            if (!(token && jwt.verify(token.value, process.env.ACCESS_TOKEN as jwt.Secret)))
                return NextResponse.redirect(new URL('/blog', req.url))

            const response = NextResponse.next();

            const user = jwt.decode(token.value) as UserDtoType;

            (req as AuthenticatedRequest).user = { ...user, isAuth: true } as UserDtoType;

            return response;
        } else {
            return NextResponse.next();
        }

    } catch (error) {

    }
}
