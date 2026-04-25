import { render } from '@testing-library/react';
import { DwollaMicroDepositsVerify } from '../index';

describe('DwollaMicroDepositsVerify', () => {
  it('should render the component', () => {
    const { asFragment } = render(
      <DwollaMicroDepositsVerify customerId="123" fundingSourceId="456" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
