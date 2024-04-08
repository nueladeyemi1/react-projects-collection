import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authenticate } from "./auth/authentication";

const protectedRoutes = ['/dashboard']


export default function middleware(req: NextRequest) {

    if (!authenticate && protectedRoutes.includes(req.nextUrl.pathname)){
        const absoluteURL = new URL('/login', req.nextUrl.origin)
        return NextResponse.redirect(absoluteURL.toString())
    }
}