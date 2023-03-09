import type { FC } from 'react';
import type { DocumentUploadProps } from '../types/component-props';

const DwollaDocumentUpload: FC<DocumentUploadProps> = (props) => {
  return <dwolla-document-upload {...props} />;
};

export default DwollaDocumentUpload;
