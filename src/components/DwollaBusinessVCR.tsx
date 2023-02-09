import type { FC } from 'react';
import { BusinessVCRAttributes } from '../@types/component-attributes';

const DwollaBusinessVCR: FC<BusinessVCRAttributes<any>> = (props) => {
  return <dwolla-customer-create {...props} />;
};

export default DwollaBusinessVCR;
