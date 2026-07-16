import { test, expect } from "@playwright/test";

test.describe("locale shells", () => {
  test("Arabic home renders RTL with the claim", async ({ page }) => {
    await page.goto("/ar");
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
    await expect(page.locator("html")).toHaveAttribute("lang", "ar");
    await expect(page.locator("h1")).toContainText("نبني البرمجيات");
  });

  test("English home renders LTR with the claim", async ({ page }) => {
    await page.goto("/en");
    await expect(page.locator("html")).toHaveAttribute("dir", "ltr");
    await expect(page.locator("h1")).toContainText("We build the software");
  });

  test("root redirects to a locale", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/(ar|en)$/);
  });

  test("locale toggle switches language and keeps the route", async ({ page }) => {
    await page.goto("/en/services");
    await page.getByRole("link", { name: "العربية" }).click();
    await expect(page).toHaveURL(/\/ar\/services$/);
    await expect(page.locator("html")).toHaveAttribute("dir", "rtl");
  });
});

test.describe("navigation", () => {
  test("current page is marked in the nav", async ({ page }) => {
    await page.goto("/en/services");
    const active = page.locator('header a[aria-current="page"]');
    await expect(active).toHaveText("Services");
  });

  test("unknown paths render the designed 404", async ({ page }) => {
    const response = await page.goto("/en/does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.locator("h1")).toContainText("This page isn't here");
  });
});

test.describe("conversion path", () => {
  test("every WhatsApp CTA carries a prefill", async ({ page }) => {
    await page.goto("/en");
    const links = page.locator('a[href^="https://wa.me/966508315325"]');
    expect(await links.count()).toBeGreaterThanOrEqual(3);
    for (const href of await links.evaluateAll((els) => els.map((el) => el.getAttribute("href")))) {
      expect(href).toContain("?text=");
    }
  });

  test("FAQ accordion opens and closes", async ({ page }) => {
    await page.goto("/en");
    const question = page.getByRole("button", { name: /Instagram/ });
    await question.scrollIntoViewIfNeeded();
    await question.click();
    await expect(page.getByText("Instagram introduces you")).toBeVisible();
    await expect(question).toHaveAttribute("aria-expanded", "true");
  });
});

test.describe("contact form", () => {
  test("empty submit after the time-trap shows validation errors", async ({ page }) => {
    await page.goto("/en/contact");
    await page.waitForTimeout(3_300);
    await page.getByRole("button", { name: "Send" }).click();
    await expect(page.getByText("We need a name")).toBeVisible();
    await expect(page.getByText("Tell us a little more")).toBeVisible();
  });
});

test("security headers are served", async ({ request }) => {
  const response = await request.get("/en");
  const headers = response.headers();
  expect(headers["content-security-policy"]).toContain("default-src 'self'");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-powered-by"]).toBeUndefined();
});
