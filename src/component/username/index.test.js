import { render, screen } from "@testing-library/react";
import UserName from './index.tsx'

it('should render a button with the class of username', () => {
  render(<UserName />)
  const userName = screen.getByRole('button')
  expect(userName).toHaveClass('username')
})