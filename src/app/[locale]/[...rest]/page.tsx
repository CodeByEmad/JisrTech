import { notFound } from "next/navigation";

/** Any unknown path under a valid locale renders the designed 404. */
export default function CatchAll() {
  notFound();
}
