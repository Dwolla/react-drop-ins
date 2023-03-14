import type { FC } from 'react';
import type { CreateCustomerProps } from '../types/component-props';

const DwollaCustomerCreate: FC<CreateCustomerProps> = (props) => {
  return <dwolla-customer-create {...props} />;
};

export default DwollaCustomerCreate;
