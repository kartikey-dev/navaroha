import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../Header";

describe("Header Component", () => {
  it("renders brand logo with correct link to home", () => {
    render(<Header />);
    const logoLink = screen.getByRole("link", { name: /Navaroha — Home/i });
    expect(logoLink).toBeInTheDocument();
  });

  it("renders main desktop navigation links", () => {
    render(<Header />);
    expect(screen.getAllByRole("link", { name: "Services" })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Work" })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "About" })[0]).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Contact" })[0]).toBeInTheDocument();
  });

  it("toggles mobile menu on button click and closes on escape key", () => {
    render(<Header />);
    const menuButton = screen.getByRole("button", { name: /Open menu/i });

    // Open menu
    fireEvent.click(menuButton);
    expect(screen.getByRole("button", { name: /Close menu/i })).toBeInTheDocument();

    // Close on Escape
    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.getByRole("button", { name: /Open menu/i })).toBeInTheDocument();
  });

  it("supports currency switcher interaction in the header", () => {
    render(<Header />);
    const currencyDropdown = screen.getByLabelText(/Select Currency/i);
    expect(currencyDropdown).toBeInTheDocument();

    fireEvent.change(currencyDropdown, { target: { value: "EUR" } });
    expect(currencyDropdown).toHaveValue("EUR");
  });
});
