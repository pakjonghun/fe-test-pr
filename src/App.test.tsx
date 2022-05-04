import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("app test", () => {
  test("should start with zero", () => {
    render(<App />);

    const element = screen.getByTestId("count");
    expect(element).toHaveTextContent("0");
  });

  it("should have +", () => {
    render(<App />);
    const element = screen.getByTestId("plus");
    expect(element).toHaveTextContent("+");
  });

  it("should have -", () => {
    render(<App />);
    const element = screen.getByTestId("minus");
    expect(element).toHaveTextContent("-");
  });

  it("should plus +1", () => {
    render(<App />);
    const element = screen.getByTestId("plus");
    fireEvent.click(element);

    const counter = screen.getByTestId("count");

    expect(counter).toHaveTextContent("1");
  });

  it("should minus -1", () => {
    render(<App />);
    const element = screen.getByTestId("minus");
    fireEvent.click(element);
    const counter = screen.getByTestId("count");
    expect(counter).toHaveTextContent("-1");
  });

  it.only("should have blue color", () => {
    render(<App />);
    const element = screen.getByTestId("switch");
    expect(element).toHaveStyle("backgroundColor: blue");
  });

  it.skip("should be disabled", () => {
    render(<App />);

    const plusBtn = screen.getByTestId("plus");

    const onButton = screen.getByTestId("switch");

    fireEvent.click(onButton);

    expect(plusBtn).toBeDisabled();
  });
});
