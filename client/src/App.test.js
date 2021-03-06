import { render, screen } from "@testing-library/react";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("renders home link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/lets go!/i);
  expect(linkElement).toBeInTheDocument();
});
