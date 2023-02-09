import type { FC } from 'react';
import { PayInAttributes } from '../@types/component-attributes';

const DwollaPayIn: FC<PayInAttributes<any>> = (props) => {
  return <dwolla-customer-create {...props} />;
};

export default DwollaPayIn;
