import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducer from "./state/reducers";
const renderWithRedux = (
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};
test('renders learn react link', () => {
  renderWithRedux(<App />);
  const linkElement = screen.getByText(/Counter/i);
  expect(linkElement).toBeInTheDocument();
});
