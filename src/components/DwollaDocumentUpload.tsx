import type { FC } from 'react';
import { DocumentUploadAttributes } from '../@types/component-attributes';

const DwollaDocumentUpload: FC<DocumentUploadAttributes<any>> = (props) => {
  return <dwolla-customer-create {...props} />;
};

export default DwollaDocumentUpload;
