// tests/ComponentTests.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ItineraryForm from "../src/components/itineraryForm/ItineraryForm";
import LoginForm from "../src/components/login/LoginForm";
import "@testing-library/jest-dom/vitest";
import { MemoryRouter } from "react-router-dom";

// Tests for LoginForm
describe("LoginForm Component", () => {
  it("renders the form fields correctly", () => {
    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/Username/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });
});
