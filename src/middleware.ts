import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

/**
 * The middleware does exactly one job: locale negotiation
 * (explicit path → Accept-Language → ar). Nothing else, ever.
 * See docs/engineering-blueprint.md §3.
 */
export default createMiddleware(routing);

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
