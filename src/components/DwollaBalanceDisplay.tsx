import type { FC } from 'react';
import type { BalanceDisplayAttributes } from '../@types/component-attributes';

const DwollaBalanceDisplay: FC<BalanceDisplayAttributes<any>> = (props) => {
  return <dwolla-balance-display {...props} />;
};

export default DwollaBalanceDisplay;
