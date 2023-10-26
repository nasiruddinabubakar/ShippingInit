import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { RegisterData } from "../src/components/Modules/auth/RegisterData";

// Mock the fetch function since postData makes a network request
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ success: true }),
  })
);

// Mock the toast function from React Toastify
jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("RegisterData Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the RegisterForm component", () => {
    render(<RegisterData />);
    expect(screen.getByTestId("register-form")).toBeInTheDocument();
  });

  it("validates email input", async () => {
    render(<RegisterData />);
    const emailInput = screen.getByTestId("emailinput");
    const registerButton = screen.getByTestId("login");

    fireEvent.change(emailInput, { target: { value: "invalidEmail" } });
    fireEvent.click(registerButton);

    // Assert that the error toast was shown
    expect(require("react-toastify").toast.error).toHaveBeenCalledWith(
      "Email is not valid",
      expect.objectContaining({
        position: expect.any(String),
        className: "toast_message",
      })
    );
  });

  it("validates password input", async () => {
    render(<RegisterData />);
    const passwordInput = screen.getByTestId("passwordinput");
    const confirmPasswordInput = screen.getByTestId("passwordinput");
    const registerButton = screen.getByTestId("login");

    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "different" } });
    fireEvent.click(registerButton);

    // Assert that the error toast was shown
    expect(require("react-toastify").toast.error).toHaveBeenCalledWith(
      "Password Doesn't match",
      expect.objectContaining({
        position: expect.any(String),
        className: "toast_message",
      })
    );
  });

  it("submits registration data", async () => {
    render(<RegisterData />);
    const nameInput = screen.getByTestId("emailinput");
    const emailInput = screen.getByTestId("emailinput");
    const passwordInput = screen.getByTestId("passwordinput");
    const confirmPasswordInput = screen.getByTestId("passwordinput");
    const registerButton = screen.getByTestId("login");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });

    fireEvent.click(registerButton);

    // Assert that postData was called with the correct data
    expect(global.fetch).toHaveBeenCalledWith(
      "http://127.0.0.1:5000/api/users/register",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "John Doe",
          mail: "john@example.com",
          password: "password",
        }),
      })
    );

    // Assert that the success toast was shown
    await waitFor(() => {
      expect(require("react-toastify").toast.success).toHaveBeenCalledWith(
        "Account Created",
        expect.objectContaining({
          position: expect.any(String),
          className: "toast_message",
        })
      );
    });
  });
});
