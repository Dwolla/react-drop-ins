import TestRenderer from 'react-test-renderer';
import DwollaPayIn from '../DwollaPayIn';

test('DwollaPayIn', () => {
  const tree = TestRenderer.create(<DwollaPayIn customerId="123" blob={''} token={''} />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('with optional props', () => {
  const tree = TestRenderer.create(
    <DwollaPayIn customerId="123" amount={10} blob={''} token={''} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
