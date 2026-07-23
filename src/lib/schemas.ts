import { z } from "zod";

/**
 * Content schemas (engineering-blueprint.md §6), the single shape
 * authority. Content files call `.parse()` at module scope, so invalid
 * content fails the build, never the visitor. Optional evidence fields
 * render NOTHING when absent (principle #34): honesty is structural.
 */

export const localizedSchema = z.object({
  ar: z.string().min(1),
  en: z.string().min(1),
});

export const screenSchema = z.object({
  src: z.string().startsWith("/work/"),
  alt: localizedSchema,
  /** Short visible label under the frame: what this screen is. */
  caption: localizedSchema.optional(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
});

export const testimonialSchema = z.object({
  quote: localizedSchema,
  attribution: localizedSchema,
  audioUrl: z.string().optional(),
});

export const workItemSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  /** "demo" auto-renders the honest kicker; "client" unlocks evidence slots. */
  kind: z.enum(["demo", "client"]),
  businessType: localizedSchema,
  title: localizedSchema,
  /** One line for the homepage plate. */
  summary: localizedSchema,
  problem: localizedSchema,
  thinking: localizedSchema,
  screens: z.array(screenSchema).default([]),
  liveUrl: z.string().url().optional(),
  testimonial: testimonialSchema.optional(),
  client: z.object({ name: localizedSchema }).optional(),
});

export const serviceSchema = z.object({
  /** Also the /services#anchor, stable, never renamed (SEO). */
  anchor: z.string().regex(/^[a-z0-9-]+$/),
  order: z.number().int().positive(),
  name: localizedSchema,
  /** Outcome-first line: what changes for the business (content-strategy §7). */
  outcome: localizedSchema,
  /** M3 fields, filled when the Services page is built. */
  body: localizedSchema.optional(),
  replaces: localizedSchema.optional(),
  techLine: z.string().optional(),
  ctaPrefill: localizedSchema.optional(),
});

export type Localized = z.infer<typeof localizedSchema>;
export type Screen = z.infer<typeof screenSchema>;
export type WorkItem = z.infer<typeof workItemSchema>;
export type Service = z.infer<typeof serviceSchema>;
