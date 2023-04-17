import type { FC } from 'react';
import type { CreateFundingSourceProps } from '../types/component-props';

const DwollaFundingSourceCreate: FC<CreateFundingSourceProps> = (props) => {
  return <dwolla-funding-source-create {...props} />;
};

export default DwollaFundingSourceCreate;
