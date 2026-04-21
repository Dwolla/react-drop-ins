import { render } from '@testing-library/react';
import DwollaBusinessVCR from '../DwollaBusinessVCR';

test('DwollaBusinessVCR', () => {
  const { asFragment } = render(<DwollaBusinessVCR />);

  expect(asFragment()).toMatchSnapshot();
});

test('with optional props', () => {
  const { asFragment } = render(
    <DwollaBusinessVCR
      correlationId="123abc"
      email="janedoe@email.com"
      firstName="Jane"
      lastName="Doe"
      ipAddress="255.255.255.255"
      hideDBAField
      privacy="www.yourprivacy.com"
      terms="www.yourterms.com"
      customerId="123"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
