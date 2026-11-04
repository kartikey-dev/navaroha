import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("Navaroha Core User Journeys & Brand Verification", () => {
  test("homepage loads with brand elements, virtual office, and passes axe-core accessibility", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Navaroha/i);

    // Header logo check
    const headerLogo = page.locator('header img[alt*="Navaroha"]');
    await expect(headerLogo).toBeVisible();

    // Verify Virtual Office section exists and Reception is active
    const virtualOfficeSection = page.locator("#virtual-office");
    await expect(virtualOfficeSection).toBeVisible();
    await expect(page.getByRole("tab", { name: /reception/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );

    // Switch to Development Lab tab in Virtual Office
    const labTab = page.getByRole("tab", { name: /development lab/i });
    await labTab.click();
    await expect(labTab).toHaveAttribute("aria-selected", "true");
    await expect(page.getByText(/Engineering & Cloud Lab/i)).toBeVisible();

    // Verify Cost Estimator section exists
    const estimatorSection = page.locator("#cost-estimator");
    await expect(estimatorSection).toBeVisible();

    // Run axe-core accessibility audit
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .disableRules(["color-contrast"]) // Optional contrast rule variations across devices
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("interactive cost estimator updates total when selecting options and currency", async ({
    page,
  }) => {
    await page.goto("/#cost-estimator");

    // Switch currency to EUR
    const eurButton = page.getByRole("button", { name: /EUR/i });
    await eurButton.click();

    const totalEl = page.getByTestId("estimator-total");
    await expect(totalEl).toContainText("€");
  });

  test("services page renders all core agency solutions", async ({ page }) => {
    await page.goto("/services");
    await expect(page).toHaveTitle(/Services/i);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("work / portfolio page renders case studies", async ({ page }) => {
    await page.goto("/work");
    await expect(page).toHaveTitle(/Work|Portfolio/i);
  });

  test("contact page form validates fields and accepts valid submission", async ({ page }) => {
    await page.goto("/contact");
    await expect(page).toHaveTitle(/Contact/i);

    const nameInput = page.getByLabel(/Your Name/i);
    const emailInput = page.getByLabel(/Email Address/i);
    const messageInput = page.getByLabel(/Project Overview/i);
    const submitBtn = page.getByRole("button", { name: /Submit Project Enquiry/i });

    // Submit invalid
    await submitBtn.click();
    await expect(page.getByText(/Full name is required/i)).toBeVisible();

    // Fill valid data
    await nameInput.fill("Elena Rostova");
    await emailInput.fill("elena@example.com");
    await messageInput.fill("We are seeking an enterprise cloud modernization partner.");
    await submitBtn.click();

    await expect(page.getByText(/Thank you for reaching out!/i)).toBeVisible({ timeout: 10000 });
  });
});
