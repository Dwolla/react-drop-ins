import type { FC } from 'react';
import type { BalanceDisplayProps } from '../types/component-props';

const DwollaBalanceDisplay: FC<BalanceDisplayProps> = (props) => {
  return <dwolla-balance-display {...props} />;
};

export default DwollaBalanceDisplay;
