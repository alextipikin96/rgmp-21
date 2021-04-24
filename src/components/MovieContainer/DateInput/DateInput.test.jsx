import { render, fireEvent, screen } from "@testing-library/react";
import DateInput from "./DateInput";
import React from "react";

describe("DateInput", () => {
  const mockDate = new Date("2020-10-10T03:24:00");
  const mockHandler = jest.fn();

  const renderDateInput = () => {
    return render(<DateInput startDate={mockDate} dateHandler={mockHandler} />);
  };

  it("should render properly", () => {
    const tree = renderDateInput();

    expect(tree).toMatchSnapshot();
  });

  it("should change date by input", () => {
    renderDateInput();

    fireEvent.change(screen.getByPlaceholderText("Select Date"), {
      target: { value: "11/11/2021" },
    });

    expect(mockHandler).toBeCalledTimes(1);
  });
});
