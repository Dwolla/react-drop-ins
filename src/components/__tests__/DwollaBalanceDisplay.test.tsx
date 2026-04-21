import { render } from '@testing-library/react';
import DwollaBalanceDisplay from '../DwollaBalanceDisplay';

test('DwollaBalanceDisplay', () => {
  const { asFragment } = render(<DwollaBalanceDisplay customerId="123" />);

  expect(asFragment()).toMatchSnapshot();
});

test('with optional props', () => {
  const { asFragment } = render(<DwollaBalanceDisplay customerId="123" hideZeroBalance />);

  expect(asFragment()).toMatchSnapshot();
});
