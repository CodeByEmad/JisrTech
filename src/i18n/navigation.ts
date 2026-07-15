import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware navigation primitives, the only way internal links
 * are built. Raw <a href="/..."> to internal routes is a review failure.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
