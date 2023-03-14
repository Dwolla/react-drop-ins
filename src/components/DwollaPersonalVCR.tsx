import type { FC } from 'react';
import type { PersonalVCRProps } from '../types/component-props';

const DwollaPersonalVCR: FC<PersonalVCRProps> = (props) => {
  return <dwolla-personal-vcr {...props} />;
};

export default DwollaPersonalVCR;
