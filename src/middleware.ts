import createMiddleware from "next-intl/middleware";
import { routing } from "./libraries/next-intl/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|pt-BR)/:path*"],
};
