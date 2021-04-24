import React from "react";
import ModalForm from "./ModalForm";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

describe("ModalForm", () => {
  const mockSubmitHandler = jest.fn();
  const mockCloseModal = jest.fn();
  let emptyMovie;

  const renderModalForm = () =>
    render(
      <ModalForm
        formType="add"
        initialMovie={emptyMovie}
        submitHandler={mockSubmitHandler}
        closeModalForm={mockCloseModal}
      />
    );
  beforeEach(() => {
    emptyMovie = {
      release_date: null,
      poster_path: "",
      title: "",
      overview: "",
      runtime: 0,
      genres: [],
    };
  });

  it("should render properly", () => {
    const { asFragment } = renderModalForm();
    expect(asFragment()).toMatchSnapshot();
  });

  it("should not call submitHandler if input empty", () => {
    renderModalForm();

    fireEvent.click(screen.getByText("SUBMIT"));

    expect(mockSubmitHandler).not.toBeCalled();
  });

  it("should work reset form", () => {
    renderModalForm();
    const input = screen.getByPlaceholderText("Title here");

    fireEvent.change(input, { target: { value: "mock title" } });
    expect(input.value).toEqual("mock title");

    fireEvent.click(screen.getByText("reset"));
    expect(input.value).toEqual("");
  });

  it("should send correct form", async () => {
    render(
      <ModalForm
        formType="add"
        initialMovie={{ ...emptyMovie, genres: ["Horror"] }}
        submitHandler={mockSubmitHandler}
        closeModalForm={mockCloseModal}
      />
    );

    const submitButton = screen.getByText("SUBMIT");
    fireEvent.change(screen.getByPlaceholderText("Title here"), {
      target: { value: "Title" },
    });
    fireEvent.change(screen.getByPlaceholderText("Select Date"), {
      target: { value: "2016-12-29" },
    });
    fireEvent.change(screen.getByPlaceholderText("Movie url here"), {
      target: {
        value:
          "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      },
    });
    fireEvent.change(screen.getByPlaceholderText("Overview here"), {
      target: { value: "Overview" },
    });
    fireEvent.change(screen.getByPlaceholderText("Runtime here"), {
      target: { value: ["1"] },
    });
    fireEvent.submit(submitButton);

    await waitFor(() => {
      expect(mockSubmitHandler).toHaveBeenCalledTimes(1);
    });
  });

  it("close modal", async () => {
    renderModalForm();

    const submitButton = screen.getByTestId("closeForm");

    submitButton && fireEvent.click(submitButton);
    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });
});
