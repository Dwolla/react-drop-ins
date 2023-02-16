import TestRenderer from 'react-test-renderer';
import DwollaBeneficialOwners from '../DwollaBeneficialOwners';

test('DwollaBeneficialOwners', () => {
  const tree = TestRenderer.create(<DwollaBeneficialOwners customerId="123" />).toJSON();

  expect(tree).toMatchSnapshot();
});
