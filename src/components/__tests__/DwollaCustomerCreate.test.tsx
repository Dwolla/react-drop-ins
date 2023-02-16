import TestRenderer from 'react-test-renderer';
import DwollaCustomerCreate from '../DwollaCustomerCreate';

test('DwollaCustomerCreate', () => {
  const tree = TestRenderer.create(<DwollaCustomerCreate />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('with optional props', () => {
  const tree = TestRenderer.create(
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
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
