import { render } from '@testing-library/react';
import DwollaClientCreate from '../DwollaClientCreate';

test('DwollaClientCreate', () => {
  const { asFragment } = render(<DwollaClientCreate />);

  expect(asFragment()).toMatchSnapshot();
});

test('with optional props', () => {
  const { asFragment } = render(
    <DwollaClientCreate
      clientAccountId="123"
      correlationId="123abc"
      email="janedoe@email.com"
      firstName="Jane"
      lastName="Doe"
      ipAddress="255.255.255.255"
      hideDBAField
      privacy="www.yourprivacy.com"
      terms="www.yourterms.com"
      website="www.yourwebsite.com"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
