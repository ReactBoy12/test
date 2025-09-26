import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import Form from "./Form";

describe("form", () => {
  test("render username and password inputs", () => {
    render(<Form onLogin={jest.fn()} />);
    const username = screen.getByPlaceholderText("Enter username");
    const password = screen.getByPlaceholderText("Enter password");

    
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});