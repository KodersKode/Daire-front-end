import { render, screen } from "@testing-library/react";
import NavButton from "./index.tsx";


// test('navButton must be a button', () => {
//   render(<NavButton />);
//   const button = screen.getByRole("button");
//   expect(logo).toHaveAttribute("src", "/logo.svg");
//   expect(logo).toHaveAttribute("alt", "Logo");
// });

it('should render a button with the class of navButton', () => {
  render(<NavButton />)
  const navButton = screen.getByRole('button')
  expect(navButton).toHaveClass('navButton')
})

