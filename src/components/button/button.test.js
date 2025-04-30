import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";
import { describe, expect } from "vitest";

describe("Button Component", () => {
  it("renders without crashing", () => {
    render(<Button text="Click me" />);
  });

  it("triggers onClick function when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button text="Click me" onClick={handleClick} />
    );
    const buttonElement = getByText(/click me/i);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
