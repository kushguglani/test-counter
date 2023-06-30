import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, fireEvent } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import Counter from "./Counter";
import reducer from "../state/reducers";
afterEach(cleanup);
const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
it("checks initial state is equal to 5", () => {
  const { getByTestId } = renderWithRedux(<Counter />);
  expect(getByTestId("counter")).toHaveTextContent(5);

  // non redux component
  // const {getByTestId} =  render(<Counter />);
  //   expect(getByTestId("counter-value")).toHaveTextContent("1");
});
it("increments the counter through redux", () => {
  const { getByTestId } = renderWithRedux(<Counter />, {
    initialState: { counter: 15 },
  });
  fireEvent.click(getByTestId("button-up"));
  expect(getByTestId("counter")).toHaveTextContent("16");
});
it("decrements the counter through redux", () => {
  const { getByTestId } = renderWithRedux(<Counter />, {
    initialState: { counter: 100 },
  });
  fireEvent.click(getByTestId("button-down"));
  expect(getByTestId("counter")).toHaveTextContent("99");
});
