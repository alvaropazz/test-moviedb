import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app wrapper", () => {
  render(<App />);
  const wrapper = screen.getByTestId("wrapper");
  expect(wrapper).toBeInTheDocument();
});
