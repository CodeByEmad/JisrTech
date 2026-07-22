import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Accessibility gate: every page must be axe-clean (WCAG 2.0 A/AA +
 * 2.1 AA) in both locales. Runs in CI on every push, so regressions
 * are caught before they ship.
 */

const pages = [
  "/ar",
  "/en",
  "/ar/services",
  "/en/services",
  "/ar/work",
  "/en/work",
  "/ar/studio",
  "/en/studio",
  "/ar/contact",
  "/en/contact",
  "/ar/privacy",
  "/en/privacy",
];

for (const path of pages) {
  test(`axe clean: ${path}`, async ({ page }) => {
    await page.goto(path, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target).join(", ")}`),
    ).toEqual([]);
  });
}
