import type { FC } from 'react';
import { BalanceDisplayAttributes } from '../@types/component-attributes';

const DwollaBalanceDisplay: FC<BalanceDisplayAttributes<any>> = (props) => {
  return <dwolla-customer-create {...props} />;
};

export default DwollaBalanceDisplay;
