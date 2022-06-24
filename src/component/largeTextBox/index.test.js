import { render, screen } from "@testing-library/react";
import LargeTextBox from './index.tsx'

it('should render a large text input with the class of largetextbox', () => {
  render(<LargeTextBox />)
  const textbox = screen.getByRole('textbox')
  expect(textbox).toHaveClass('largetextbox')
})