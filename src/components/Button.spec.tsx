import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('<Button/>', () => {
	it('should be rendered', () => {
		render(<Button>Hello</Button>)
		expect(screen.getByText('Hello')).toBeInTheDocument()
	})
})
