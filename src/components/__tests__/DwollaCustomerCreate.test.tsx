import { render } from '@testing-library/react';
import DwollaCustomerCreate from '../DwollaCustomerCreate';

test('DwollaCustomerCreate', () => {
  const { asFragment } = render(<DwollaCustomerCreate />);

  expect(asFragment()).toMatchSnapshot();
});

test('with optional props', () => {
  const { asFragment } = render(
    <DwollaCustomerCreate
      correlationId="123abc"
      email="janedoe@email.com"
      firstName="Jane"
      lastName="Doe"
      ipAddress="255.255.255.255"
      privacy="www.yourprivacy.com"
      terms="www.yourterms.com"
      businessName="Jane Doe, LLC"
      isBusiness
      type="receive-only"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
