import { render, screen } from "@testing-library/react";
import DropDown from './index.tsx'

// it('should render a drop down with the class of dropDown', () => {
//   render(<DropDown />)
//   const dropdown = screen.getByRole('textbox')
//   expect(dropdown).toHaveClass('dropDown')
// })

it('should render a drop down with the class of dropDown', () => {
  render(<DropDown />)
expect(screen.getByRole('option', { name: 'Laura' }).selected).toBe(true)
})