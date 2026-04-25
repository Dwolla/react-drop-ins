import { render } from '@testing-library/react';
import DwollaDocumentUpload from '../DwollaDocumentUpload';

test('DwollaDocumentUpload', () => {
  const { asFragment } = render(<DwollaDocumentUpload customerId="123" />);

  expect(asFragment()).toMatchSnapshot();
});
