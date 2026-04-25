import { render } from '@testing-library/react';
import DwollaCustomerUpgrade from '../DwollaCustomerUpgrade';

test('DwollaCustomerUpdate', () => {
  const { asFragment } = render(<DwollaCustomerUpgrade customerId="123" />);

  expect(asFragment()).toMatchSnapshot();
});

test('with optional props', () => {
  const { asFragment } = render(
    <DwollaCustomerUpgrade
      customerId="123"
      correlationId="123abc"
      email="janedoe@email.com"
      firstName="Jane"
      lastName="Doe"
      ipAddress="255.255.255.255"
      privacy="www.yourprivacy.com"
      terms="www.yourterms.com"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
