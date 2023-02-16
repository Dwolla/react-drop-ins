import type { FC } from 'react';
import { PersonalVCRAttributes } from '../@types/component-attributes';

const DwollaPersonalVCR: FC<PersonalVCRAttributes<any>> = (props) => {
  return <dwolla-personal-vcr {...props} />;
};

export default DwollaPersonalVCR;
