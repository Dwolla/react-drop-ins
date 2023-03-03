import type { FC } from 'react';
import type { UpdateCustomerAttributes } from '../@types/component-attributes';

const DwollaCustomerUpgrade: FC<UpdateCustomerAttributes<any>> = (props) => {
  return <dwolla-customer-update {...props} />;
};

export default DwollaCustomerUpgrade;
