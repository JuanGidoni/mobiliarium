import React from "react";
import { render } from "@testing-library/react";
import Header from "src/header/Header.jsx";

describe("Header Component", () => {
  test("renders without crashing", () => {
    render(<Header />);
  });
});
