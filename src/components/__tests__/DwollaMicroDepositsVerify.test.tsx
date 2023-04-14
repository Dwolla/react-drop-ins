import TestRenderer from 'react-test-renderer';
import { DwollaMicroDepositsVerify } from '../index';

describe('DwollaMicroDepositsVerify', () => {
  it('should render the component', () => {
    const tree = TestRenderer.create(
      <DwollaMicroDepositsVerify customerId="123" fundingSourceId="456" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
