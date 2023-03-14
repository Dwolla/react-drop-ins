import type { DwollaWebOptions } from '../useDwollaWeb';
import { useDwollaWeb } from '../useDwollaWeb';
import DwollaDocumentUpload from '../components/DwollaDocumentUpload';

const CUSTOMER_ID = 'dwolla-customer-uuid';

export default {
  title: 'Drop-ins/DwollaDocumentUpload',
  component: DwollaDocumentUpload,
  parameters: {
    // mocking calls that the component makes to the API throughout it's lifecycle
    mockData: [
      {
        url: '/yourTokenUrl',
        method: 'POST',
        status: 200,
        response: {
          token: 'some-token'
        }
      },
      {
        url: `https://api-sandbox.dwolla.com/customers/${CUSTOMER_ID}`,
        method: 'GET',
        status: 200,
        response: {
          _links: {
            'document-form': {},
            'verify-with-document': {}
          },
          status: 'document'
        }
      },
      {
        url: `https://api-sandbox.dwolla.com/customers/${CUSTOMER_ID}/documents`,
        method: 'GET',
        status: 200,
        response: {
          _embedded: { documents: [] }
        }
      }
    ]
  }
};

export const Default = () => {
  // import { DwollaWebOptions, useDwollaWeb } from '../useDwollaWeb';
  // import DwollaDocumentUpload from '../components/DwollaDocumentUpload';
  // TODO: Update imports after publishing to NPM

  // Create configuration for the useDwollaWeb hook
  const config: DwollaWebOptions = {
    environment: 'sandbox',
    // styles: "/styles/create-custom.css", <- Custom CSS file that is publicly hosted so the drop-in can access it
    onError: function error() {
      console.log('Error');
    },
    onSuccess: function success() {
      console.log('Success');
    },
    tokenUrl: '/yourTokenUrl'
    // token: (req) => Promise.resolve(dwollaAPIToken()) <- You can specify a token instead of using a tokenUrl
    // For more info: https://developers.dwolla.com/guides/drop-ins/generate-client-token
  };

  // Initialize the useDwollaWeb hook
  const { ready, error } = useDwollaWeb(config);

  // Wait for the hook to be ready
  if (!ready) return <div>Loading...</div>;

  // Handle errors
  if (error) return <div>Error</div>;

  // Render the DwollaDocumentUpload component when ready
  return <DwollaDocumentUpload customerId={CUSTOMER_ID} />;
};
