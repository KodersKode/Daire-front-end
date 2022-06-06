import { render, screen } from "@testing-library/react";
import Dashboard from "./index.tsx";

test("renders Hola Eva!", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/Hola Eva!/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders nueva sesion", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/nueva sesion/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders nuevo paciente", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/nuevo paciente/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders directorio de pacientes", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/directorio de pacientes/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders calendario", () => {
  render(<Dashboard />);
  const linkElement = screen.getByText(/calendario/i);
  expect(linkElement).toBeInTheDocument();
});

test('Daire logo must have src = "/logo.svg" and alt = "Logo"', () => {
  render(<Dashboard />);
  const logo = screen.getByRole("img");
  expect(logo).toHaveAttribute("src", "/logo.svg");
  expect(logo).toHaveAttribute("alt", "Logo");
});
