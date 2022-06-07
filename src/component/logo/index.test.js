import { render, screen } from "@testing-library/react";
import Logo from './index.tsx'

test('Daire logo must have src = "/logo.svg" and alt = "Logo"', () => {
  render(<Logo />);
  const logo = screen.getByRole("img");
  expect(logo).toHaveAttribute("src", "logo-daire.png");
  expect(logo).toHaveAttribute("alt", "logo");
  expect(logo).toHaveClass("logo")
});