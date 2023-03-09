import type { FC } from 'react';
import type { PayInProps } from '../types/component-props';

const DwollaPayIn: FC<PayInProps> = (props) => {
  return <dwolla-payin {...props} />;
};

export default DwollaPayIn;
