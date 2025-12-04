import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("CV Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/cv");
  });

  test("should load the CV page and display key sections", async ({ page }) => {
    // Check for the presence of key sections
    await expect(
      page.getByRole("heading", { name: "Technologies" }),
    ).toBeVisible();
    await expect(page.getByText("More…")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Education" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Experience" }),
    ).toBeVisible();
  });

  test("Has no auto-detected a11y issues", async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
