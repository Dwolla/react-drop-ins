import { render } from '@testing-library/react';
import DwollaPayIn from '../DwollaPayIn';

test('DwollaPayIn', () => {
  const { asFragment } = render(<DwollaPayIn customerId="123" blob={''} token={''} />);

  expect(asFragment()).toMatchSnapshot();
});

test('with optional props', () => {
  const { asFragment } = render(<DwollaPayIn customerId="123" amount={10} blob={''} token={''} />);

  expect(asFragment()).toMatchSnapshot();
});
