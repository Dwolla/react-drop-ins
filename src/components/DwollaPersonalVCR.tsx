import type { FC } from 'react';
import { PersonalVCRAttributes } from '../@types/component-attributes';

const DwollaPersonalVCR: FC<PersonalVCRAttributes<any>> = (props) => {
  return <dwolla-customer-create {...props} />;
};

export default DwollaPersonalVCR;
