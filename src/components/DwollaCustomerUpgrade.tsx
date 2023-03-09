import type { FC } from 'react';
import type { UpdateCustomerProps } from '../types/component-props';

const DwollaCustomerUpgrade: FC<UpdateCustomerProps> = (props) => {
  return <dwolla-customer-update {...props} />;
};

export default DwollaCustomerUpgrade;
