import Main from './Main.page';
import { fireEvent, render, screen } from '../../utils/test-utils';

describe('Simple working test', () => {
	it('The title Vite + React is visible', () => {
		expect.hasAssertions();
		render(<Main />);
		expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
	});

	it('Should increment count on click', () => {
		expect.hasAssertions();
		render(<Main />);
		const button = screen.getByText(/count is/i);
		expect(button).toBeInTheDocument();
		fireEvent.click(button);
		expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
	});
});
