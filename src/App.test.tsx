import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	it('Render App component', () => {
		expect.hasAssertions();
		render(<App />);
		expect(screen.getByText(/count is 0/i)).not.toBeNull();
	});
});
