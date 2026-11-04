import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "../ContactForm";

describe("ContactForm Component", () => {
  it("renders form fields cleanly with proper labels", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Overview/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit Project Enquiry/i })).toBeInTheDocument();
  });

  it("shows validation error on invalid input", async () => {
    render(<ContactForm />);
    const submitBtn = screen.getByRole("button", { name: /Submit Project Enquiry/i });

    // Submit empty
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Full name is required/i)).toBeInTheDocument();
    });
  });

  it("submits successfully when valid data is provided", async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/Your Name/i), {
      target: { value: "Sarah Connor" },
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "sarah@cyberdyne.org" },
    });
    fireEvent.change(screen.getByLabelText(/Project Overview/i), {
      target: { value: "We need an intelligent cloud automation platform with Next.js." },
    });

    const submitBtn = screen.getByRole("button", { name: /Submit Project Enquiry/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Thank you for reaching out!/i)).toBeInTheDocument();
    });
  });
});
