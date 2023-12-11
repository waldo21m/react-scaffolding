import { fireEvent, render, screen } from './utils/test-utils';
import App from './App';

describe('Simple working test', () => {
	it('The title Vite + React is visible', () => {
		render(<App />);
		expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();
	});

	it('Should increment count on click', () => {
		render(<App />);
		const button = screen.getByText(/count is/i);
		expect(button).toBeInTheDocument();
		fireEvent.click(button);
		expect(screen.getByText(/count is 1/i)).toBeInTheDocument();
	});
});
