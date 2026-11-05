import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CostEstimator } from "../CostEstimator";

describe("CostEstimator Component", () => {
  it("renders with default selections and shows formatted total", () => {
    render(<CostEstimator />);

    // Header check
    expect(screen.getByText(/Project Cost & Timeline Estimator/i)).toBeInTheDocument();

    // Check initial total is present
    expect(screen.getByTestId("estimator-total")).toBeInTheDocument();
  });

  it("updates currency when changing currency switcher", () => {
    render(<CostEstimator />);

    const eurButton = screen.getByRole("button", { name: /EUR/i });
    fireEvent.click(eurButton);

    expect(screen.getByTestId("estimator-total").textContent).toContain("€");
  });

  it("updates cost when switching service type and scope", () => {
    render(<CostEstimator />);

    const webAppButton = screen.getByRole("button", { name: /Web Applications & SaaS/i });
    fireEvent.click(webAppButton);

    const enterpriseScopeButton = screen.getByRole("button", { name: /Enterprise Scale/i });
    fireEvent.click(enterpriseScopeButton);

    // Enterprise web app is $20,000 USD
    expect(screen.getByTestId("estimator-total").textContent).toBe("$20,000");
  });

  it("toggles addons and updates total cost accordingly", () => {
    render(<CostEstimator />);

    const initialText = screen.getByTestId("estimator-total").textContent || "";
    const addonCheckbox = screen.getByRole("checkbox", { name: /Full Design System/i });

    fireEvent.click(addonCheckbox);
    expect(addonCheckbox).toBeChecked();

    // Total should have increased
    const updatedText = screen.getByTestId("estimator-total").textContent || "";
    expect(updatedText).not.toBe(initialText);

    // Uncheck addon
    fireEvent.click(addonCheckbox);
    expect(addonCheckbox).not.toBeChecked();
    expect(screen.getByTestId("estimator-total").textContent).toBe(initialText);

    // Switch timeline pace
    const rushButton = screen.getByRole("button", { name: /Rush Sprint/i });
    fireEvent.click(rushButton);
    expect(screen.getByTestId("estimator-total").textContent).not.toBe(initialText);
  });
});
