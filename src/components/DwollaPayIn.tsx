import type { FC } from 'react';
import { PayInAttributes } from '../@types/component-attributes';

const DwollaPayIn: FC<PayInAttributes<any>> = (props) => {
  return <dwolla-payin {...props} />;
};

export default DwollaPayIn;
