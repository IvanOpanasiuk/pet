import { Button, ThemeButton } from './Button';
import { render, screen } from '@testing-library/react';
describe('Button', () => {
  test('test', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });
  test('with first param', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
