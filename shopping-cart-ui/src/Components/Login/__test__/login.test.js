import React from "react";
import { ReactDOM } from "react";
import Login from "../login.component";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("should render the component", () => {
  render(<Login />);
  const emailElement = screen.getByTestId("email");
  expect(emailElement).toHaveTextContent("Email");
});
