import type { FC } from 'react';
import type { CreateCustomerAttributes } from '../@types/component-attributes';

const DwollaCustomerCreate: FC<CreateCustomerAttributes<any>> = (props) => {
  return <dwolla-customer-create {...props} />;
};

export default DwollaCustomerCreate;
