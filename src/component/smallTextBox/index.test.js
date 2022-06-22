import { render, screen } from "@testing-library/react";
import SmallTextBox from './index.tsx'

it('should render an input field with the class of smallTextBox', () => {
  render(<SmallTextBox />)
  const smallTextBox = screen.getByRole('textbox')
  expect(smallTextBox).toHaveClass('smallTextBox')
})