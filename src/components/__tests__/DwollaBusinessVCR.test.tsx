import TestRenderer from 'react-test-renderer';
import DwollaBusinessVCR from '../DwollaBusinessVCR';

test('DwollaBusinessVCR', () => {
  const tree = TestRenderer.create(<DwollaBusinessVCR />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('with optional props', () => {
  const tree = TestRenderer.create(
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
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
