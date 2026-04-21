import { render } from '@testing-library/react';
import DwollaPersonalVCR from '../DwollaPersonalVCR';

test('DwollaPersonalVCR', () => {
  const { asFragment } = render(<DwollaPersonalVCR />);

  expect(asFragment()).toMatchSnapshot();
});

test('with optional props', () => {
  const { asFragment } = render(
    <DwollaPersonalVCR
      correlationId="123abc"
      email="janedoe@email.com"
      firstName="Jane"
      lastName="Doe"
      ipAddress="255.255.255.255"
      privacy="www.yourprivacy.com"
      terms="www.yourterms.com"
      customerId="123"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
