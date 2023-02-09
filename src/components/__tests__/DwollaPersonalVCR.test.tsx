import TestRenderer from 'react-test-renderer';
import DwollaPersonalVCR from '../DwollaPersonalVCR';

test('DwollaPersonalVCR', () => {
  const tree = TestRenderer.create(<DwollaPersonalVCR />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('with optional props', () => {
  const tree = TestRenderer.create(
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
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
