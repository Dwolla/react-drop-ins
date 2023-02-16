import type { FC } from 'react';
import { ClientAccountOpeningAttributes } from '../@types/component-attributes';

const DwollaClientCreate: FC<ClientAccountOpeningAttributes<any>> = (props) => {
  return <dwolla-account-opening {...props} />;
};

export default DwollaClientCreate;
