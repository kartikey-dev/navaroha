import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { VirtualOffice } from "../VirtualOffice";

describe("VirtualOffice Component", () => {
  it("renders with the Virtual Reception as the default active room", () => {
    render(<VirtualOffice />);
    expect(screen.getByRole("tablist", { name: /studio environments/i })).toBeInTheDocument();

    // Check that Virtual Reception tab is selected
    const receptionTab = screen.getByRole("tab", { name: /reception/i });
    expect(receptionTab).toHaveAttribute("aria-selected", "true");

    // Check reception room content
    expect(screen.getByText(/Navaroha Digital Studio Reception/i)).toBeInTheDocument();
  });

  it("switches rooms when clicking another room tab", () => {
    render(<VirtualOffice />);

    const devLabTab = screen.getByRole("tab", { name: /development lab/i });
    fireEvent.click(devLabTab);

    expect(devLabTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText(/Engineering & Cloud Lab/i)).toBeInTheDocument();
    expect(screen.getByText(/production-grade development/i)).toBeInTheDocument();
  });

  it("navigates through all 4 rooms via tabs", () => {
    render(<VirtualOffice />);

    // Design Studio
    const designTab = screen.getByRole("tab", { name: /design studio/i });
    fireEvent.click(designTab);
    expect(screen.getByText(/UI\/UX Design Studio/i)).toBeInTheDocument();

    // Meeting Room
    const meetingTab = screen.getByRole("tab", { name: /meeting room/i });
    fireEvent.click(meetingTab);
    expect(screen.getByText(/Executive Meeting & Strategy Suite/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /schedule a project discovery call/i })
    ).toBeInTheDocument();
  });

  it("supports keyboard navigation between room tabs", () => {
    render(<VirtualOffice />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs.length).toBe(4);

    // Focus first tab and press ArrowRight
    tabs[0].focus();
    fireEvent.keyDown(tabs[0], { key: "ArrowRight" });
    expect(screen.getByRole("tab", { name: /design studio/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );

    // Press ArrowLeft
    fireEvent.keyDown(tabs[1], { key: "ArrowLeft" });
    expect(screen.getByRole("tab", { name: /reception/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );

    // Press End key to jump to last room
    fireEvent.keyDown(tabs[0], { key: "End" });
    expect(screen.getByRole("tab", { name: /meeting room/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );

    // Press Home key to jump to first room
    fireEvent.keyDown(tabs[3], { key: "Home" });
    expect(screen.getByRole("tab", { name: /reception/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );

    // Unhandled key does nothing
    fireEvent.keyDown(tabs[0], { key: "Enter" });
    expect(screen.getByRole("tab", { name: /reception/i })).toHaveAttribute(
      "aria-selected",
      "true"
    );
  });

  it("allows switching code files in Development Lab", () => {
    render(<VirtualOffice />);

    // Switch to Development Lab
    const labTab = screen.getByRole("tab", { name: /development lab/i });
    fireEvent.click(labTab);

    // Check default file
    expect(screen.getByText(/DigitalProductEngine/i)).toBeInTheDocument();

    // Switch to Pipeline tab
    const pipelineBtn = screen.getByRole("button", { name: /ci-cd-pipeline\.yml/i });
    fireEvent.click(pipelineBtn);
    expect(screen.getByText(/quality-gates-stage-11/i)).toBeInTheDocument();
  });

  it("opens interactive booking modal in Meeting Room", () => {
    render(<VirtualOffice />);

    // Switch to Meeting Room
    const meetingTab = screen.getByRole("tab", { name: /meeting room/i });
    fireEvent.click(meetingTab);

    const bookSlotBtn = screen.getByRole("button", { name: /Instant Calendar Booking/i });
    fireEvent.click(bookSlotBtn);

    expect(screen.getByText(/Select Meeting Time Slot/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^10:00 AM UTC$/i })).toBeInTheDocument();
  });
});
