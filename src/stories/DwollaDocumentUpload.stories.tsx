import { useDwollaWeb, DwollaWebOptions } from '../useDwollaWeb';
import DwollaDocumentUpload from '../components/DwollaDocumentUpload';

export default {
  title: 'Drop-ins/DwollaDocumentUpload',
  component: DwollaDocumentUpload
};

export const Default = () => {
  // import { DwollaWebOptions, useDwollaWeb } from '../useDwollaWeb';
  // import DwollaDocumentUpload from '../components/DwollaDocumentUpload';
  // TODO: Update imports after publishing to NPM

  // Create configuration for the useDwollaWeb hook
  const config: DwollaWebOptions = {
    environment: 'sandbox',
    onError: function error() {
      console.log('Error');
    },
    onSuccess: function success() {
      console.log('Success');
    },
    tokenUrl: '/yourTokenUrl'
  };

  // Initialize the useDwollaWeb hook
  const { ready, error } = useDwollaWeb(config);

  // Wait for the hook to be ready
  if (!ready) return <div>Loading...</div>;

  // Handle errors
  if (error) return <div>Error</div>;

  // Render the DwollaDocumentUpload component when ready
  return <DwollaDocumentUpload customerId="some-customer-id" />;
};
