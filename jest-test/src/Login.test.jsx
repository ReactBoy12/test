import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

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

  test("check whether the username or password is empty or not", () => {
    const isLogin = jest.fn();
    render(<Form />);

    const username = screen.getByTestId("user");
    fireEvent.change(username, { target: { value: "shaileshgore@gmail.com" } });
    expect(isLogin).not.toHaveBeenCalled();
  });

  test("check whether the username or password is empty or not", () => {
    const isLogin = jest.fn();
    render(<Form />);
    const password = screen.getByTestId("pass");
    fireEvent.change(password, { target: { value: "shailesh@123" } });
    expect(isLogin).not.toHaveBeenCalled();
  });

  test("submit the form", () => {
    const isLogin = jest.fn();
    render(<Form onLogin={isLogin} />);
    const username = screen.getByTestId("user");
    fireEvent.change(username, { target: { value: "shaileshgore@gmail.com" } });
    const password = screen.getByTestId("pass");
    fireEvent.change(password, { target: { value: "shailesh@123" } });

    fireEvent.click(screen.getByRole("button",{name:"Login"}));
    expect(isLogin).toHaveBeenCalled();
  });
});
