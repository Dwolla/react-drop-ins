import type { FC } from 'react';
import type { DocumentUploadAttributes } from '../@types/component-attributes';

const DwollaDocumentUpload: FC<DocumentUploadAttributes<any>> = (props) => {
  return <dwolla-document-upload {...props} />;
};

export default DwollaDocumentUpload;
