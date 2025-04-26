// src/components/header/Header.test.jsx
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header"; // or wherever your Header is

describe("Header Component", () => {
  it("renders without crashing", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });
});
