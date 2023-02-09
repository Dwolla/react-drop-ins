import TestRenderer from 'react-test-renderer';
import DwollaClientCreate from '../DwollaClientCreate';

test('DwollaClientCreate', () => {
  const tree = TestRenderer.create(<DwollaClientCreate />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('with optional props', () => {
  const tree = TestRenderer.create(
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
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
