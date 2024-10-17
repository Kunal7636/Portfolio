import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const appElement = screen.getByTestId('app-container'); // or any known test ID
  expect(appElement).toBeInTheDocument();
});