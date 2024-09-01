import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ItineraryForm from "../src/components/itineraryForm/ItineraryForm";
import "@testing-library/jest-dom/vitest";

describe("ItineraryForm Component", () => {
  it("renders the form fields correctly", () => {
    render(<ItineraryForm />);

    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Duration/i)).toBeInTheDocument();
  });
});
