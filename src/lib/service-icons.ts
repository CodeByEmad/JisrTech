import {
  Browsers,
  Buildings,
  Code,
  Compass,
  DeviceMobile,
  Robot,
} from "@phosphor-icons/react/dist/ssr";

/** One icon per service anchor, shared by the homepage grid and the services page. */
export const SERVICE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string; weight?: "duotone" }>
> = {
  "web-applications": Browsers,
  "software-development": Code,
  "digital-solutions": Compass,
  "automation-ai": Robot,
  "mobile-apps": DeviceMobile,
  "erp-systems": Buildings,
};
