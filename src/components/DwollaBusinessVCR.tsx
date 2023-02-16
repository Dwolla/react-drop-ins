import type { FC } from 'react';
import { BusinessVCRAttributes } from '../@types/component-attributes';

const DwollaBusinessVCR: FC<BusinessVCRAttributes<any>> = (props) => {
  return <dwolla-business-vcr {...props} />;
};

export default DwollaBusinessVCR;
