import type { FC } from 'react';
import { BeneficialOwnersAttributes } from '../@types/component-attributes';

const DwollaBeneficialOwners: FC<BeneficialOwnersAttributes<any>> = (props) => {
  return <dwolla-customer-create {...props} />;
};

export default DwollaBeneficialOwners;
