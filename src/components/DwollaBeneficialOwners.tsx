import type { FC } from 'react';
import type { BeneficialOwnersProps } from '../types/component-props';

const DwollaBeneficialOwners: FC<BeneficialOwnersProps> = (props) => {
  return <dwolla-beneficial-owners {...props} />;
};

export default DwollaBeneficialOwners;
