import { render } from '@testing-library/react';
import { DwollaFundingSourceCreate } from '../index';

describe('DwollaFundingSourceCreate', () => {
  it('should render component without micro-deposit initiation', () => {
    const { asFragment } = render(<DwollaFundingSourceCreate customerId="123" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render component with micro-deposit initiation', () => {
    const { asFragment } = render(
      <DwollaFundingSourceCreate customerId="123" initiateMicroDeposits />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
