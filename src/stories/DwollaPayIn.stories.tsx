import type { DwollaWebOptions } from '../useDwollaWeb';
import { useDwollaWeb } from '../useDwollaWeb';
import DwollaPayIn from '../components/DwollaPayIn';

const CUSTOMER_ID = 'dwolla-customer-uuid';

export default {
  title: 'Drop-ins/DwollaPayIn',
  component: DwollaPayIn,
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
        url: `https://api-sandbox.dwolla.com/customers/${CUSTOMER_ID}/funding-sources?removed=false`,
        method: 'GET',
        status: 200,
        response: {
          _embedded: {
            'funding-sources': [
              {
                type: 'bank',
                name: 'My Checking ABC'
              },
              {
                type: 'bank',
                name: 'My Savings XYZ'
              }
            ]
          }
        }
      }
    ]
  }
};

export const Default = () => {
  // import { DwollaWebOptions, useDwollaWeb } from '../useDwollaWeb';
  // import DwollaPayIn from '../components/DwollaPayIn';
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

  // Render the DwollaPayIn component when ready
  return (
    <div style={{ width: '470px' }}>
      <DwollaPayIn customerId={CUSTOMER_ID} amount={10.0} blob={''} token={''} />
    </div>
  );
};
