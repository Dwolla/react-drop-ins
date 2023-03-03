import type { FC } from 'react';
import type { BeneficialOwnersAttributes } from '../@types/component-attributes';

const DwollaBeneficialOwners: FC<BeneficialOwnersAttributes<any>> = (props) => {
  return <dwolla-beneficial-owners {...props} />;
};

export default DwollaBeneficialOwners;
