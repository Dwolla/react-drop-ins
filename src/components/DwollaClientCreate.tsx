import type { FC } from 'react';
import type { ClientAccountOpeningProps } from '../types/component-props';

const DwollaClientCreate: FC<ClientAccountOpeningProps> = (props) => {
  return <dwolla-account-opening {...props} />;
};

export default DwollaClientCreate;
