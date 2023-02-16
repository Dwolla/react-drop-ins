import TestRenderer from 'react-test-renderer';
import DwollaCustomerUpgrade from '../DwollaCustomerUpgrade';

test('DwollaCustomerUpdate', () => {
  const tree = TestRenderer.create(<DwollaCustomerUpgrade customerId="123" />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('with optional props', () => {
  const tree = TestRenderer.create(
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
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
