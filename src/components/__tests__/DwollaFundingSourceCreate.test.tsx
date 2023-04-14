import TestRenderer from 'react-test-renderer';
import { DwollaFundingSourceCreate } from '../index';

describe('DwollaFundingSourceCreate', () => {
  it('should render component without micro-deposit initiation', () => {
    const tree = TestRenderer.create(<DwollaFundingSourceCreate customerId="123" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render component with micro-deposit initiation', () => {
    const tree = TestRenderer.create(
      <DwollaFundingSourceCreate customerId="123" initiateMicroDeposits />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
