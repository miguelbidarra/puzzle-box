export { default } from "next-auth/middleware";

export const config = { matcher: ["/playground/:path*", "/cursos/:path*"] }
