import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("render initial count as 0", async() => {
  render(<Counter />);
  const countValue = await screen.findByTestId("count-value");
  expect(countValue).toHaveTextContent('0');
});

test("increment the count", async() => {
  render(<Counter />);
  const incrementButton = screen.getByText('Increment');
  fireEvent.click(incrementButton);
  const countValue = await screen.findByTestId("count-value");
  expect(countValue).toHaveTextContent("1")

});

test("decrement the Counter", async () => {
  render(<Counter />);
  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  const countValue =await screen.findByTestId("count-value");
  expect(countValue).toHaveTextContent("-1")
})