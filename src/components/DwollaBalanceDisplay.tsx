import type { FC } from 'react';
import { BalanceDisplayAttributes } from '../@types/component-attributes';

const DwollaBalanceDisplay: FC<BalanceDisplayAttributes<any>> = (props) => {
  return <dwolla-balance-display {...props} />;
};

export default DwollaBalanceDisplay;
