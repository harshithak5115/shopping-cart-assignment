import React from "react";
import { ReactDOM } from "react";
import Footer from "../Footer.component";
import { itTSAnyKeyword } from "@babel/types";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   const p = document.createElement("p", div);
//   ReactDOM.render(<Footer></Footer>, p);
// });

test("should render the component", () => {
  render(<Footer />);
  const footerElement = screen.getByTestId("footer");
  expect(footerElement).toHaveTextContent("Copyright reserved");
});
