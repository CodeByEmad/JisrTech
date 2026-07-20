import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Link } from "@/i18n/navigation";
import { whatsAppUrl } from "@/lib/whatsapp";

/**
 * The two CTA primitives. Shape rule: buttons are pills, always.
 * `WaCta` is the conversion path (opens WhatsApp with a contextual
 * prefill); `CtaLink` is internal navigation.
 */

type Variant = "primary" | "quiet" | "night";

const base =
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 py-3.5 text-[0.95rem] font-bold transition-[background-color,transform] duration-300 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-paper-raise shadow-lg shadow-accent/25 hover:bg-accent-deep hover:shadow-accent/40",
  quiet: "border border-line bg-paper-raise text-ink hover:border-accent/40",
  night: "bg-paper-raise text-ink hover:bg-paper",
};

export function WaCta({
  prefill,
  label,
  variant = "primary",
  className = "",
}: {
  prefill: string;
  label: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={whatsAppUrl(prefill)}
      target="_blank"
      rel="noopener"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <WhatsappLogo weight="fill" className="size-5" aria-hidden />
      {label}
    </a>
  );
}

export function CtaLink({
  href,
  label,
  variant = "quiet",
  className = "",
}: {
  href: React.ComponentProps<typeof Link>["href"];
  label: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} group ${variants[variant]} ${className}`}>
      {label}
      <ArrowRight
        aria-hidden
        className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
      />
    </Link>
  );
}
