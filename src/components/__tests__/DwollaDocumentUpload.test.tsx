import TestRenderer from 'react-test-renderer';
import DwollaDocumentUpload from '../DwollaDocumentUpload';

test('DwollaDocumentUpload', () => {
  const tree = TestRenderer.create(<DwollaDocumentUpload customerId="123" />).toJSON();

  expect(tree).toMatchSnapshot();
});
