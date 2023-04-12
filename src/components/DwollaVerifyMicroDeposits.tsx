import type { FC } from 'react';
import type { VerifyMicroDepositsProps } from '../types/component-props';

const DwollaVerifyMicroDeposits: FC<VerifyMicroDepositsProps> = (props) => {
  return <dwolla-micro-deposits-verify {...props} />;
};

export default DwollaVerifyMicroDeposits;
