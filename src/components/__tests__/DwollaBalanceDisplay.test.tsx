import TestRenderer from 'react-test-renderer';
import DwollaBalanceDisplay from '../DwollaBalanceDisplay';

test('DwollaBalanceDisplay', () => {
  const tree = TestRenderer.create(<DwollaBalanceDisplay customerId="123" />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('with optional props', () => {
  const tree = TestRenderer.create(
    <DwollaBalanceDisplay customerId="123" hideZeroBalance />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
