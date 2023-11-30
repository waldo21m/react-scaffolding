import App from './App'
import { fireEvent, render, screen } from './utils/test-utils'

describe('Simple working test', () => {
  it('The title Vite + React is visible', () => {
    render(<App />)
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument()
  })

  it('Should increment count on click', async () => {
    const { getByText } = render(<App />)
    const button = getByText(/count is/i)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(getByText(/count is 1/i)).toBeInTheDocument()
  })
})
