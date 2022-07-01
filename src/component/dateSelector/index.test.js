import { render, screen } from "@testing-library/react";
import DateSelector from "./index.tsx";

it("should render DateSelector with a label prop", () => {
  render(<DateSelector label="This is a label" />);

  const labelElement = screen.getByText(/this is a label/i);

  expect(labelElement).toBeInTheDocument();
});
