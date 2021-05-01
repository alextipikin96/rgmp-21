import {render, fireEvent, screen} from "@testing-library/react";
import CategorySelector from "./CategorySelector";
import React from "react";

describe("CategorySelector", () => {

    let mockHandler = jest.fn();

    it("should render properly",() => {
        const tree = render(<CategorySelector selectedCategories={[]} chooseCategoryHandler={mockHandler} />);

        expect(tree).toMatchSnapshot();
    });

    it("should call handler on change",() => {
        render(<CategorySelector selectedCategories={[]} chooseCategoryHandler={mockHandler} />);
        const checkbox = screen.getByDisplayValue("Horror");

        fireEvent.click(checkbox);

        expect(mockHandler).toBeCalledTimes(1);
    });

    it("should change visibility",() => {
        render(<CategorySelector selectedCategories={[]} chooseCategoryHandler={mockHandler} />);

        const categoryList = document.querySelector("ul");
        expect(categoryList.hidden).toBeTruthy();

        fireEvent.click(document.getElementsByClassName("inputWrapper")[0]);

        expect(categoryList.hidden).toBeFalsy();
    });
})
