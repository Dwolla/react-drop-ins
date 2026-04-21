import { render } from '@testing-library/react';
import DwollaBeneficialOwners from '../DwollaBeneficialOwners';

test('DwollaBeneficialOwners', () => {
  const { asFragment } = render(<DwollaBeneficialOwners customerId="123" />);

  expect(asFragment()).toMatchSnapshot();
});
