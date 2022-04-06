import React from "react";
import { ReactDOM } from "react";
import Register from "../register.component";
import { itTSAnyKeyword } from "@babel/types";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   const p = document.createElement("p", div);
//   ReactDOM.render(<Footer></Footer>, p);
// });

test("should render the component", () => {
  render(<Register />);
  const registerElement = screen.getByTestId("register");
  expect(registerElement).toHaveTextContent("Signup");
});
