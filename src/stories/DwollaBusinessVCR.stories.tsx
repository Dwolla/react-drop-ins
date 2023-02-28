import { useDwollaWeb, DwollaWebOptions } from '../useDwollaWeb';
import DwollaBusinessVCR from '../components/DwollaBusinessVCR';

export default {
  title: 'Drop-ins/DwollaBusinessVCR',
  component: DwollaBusinessVCR,
  parameters: {
    // mocking the call to the /yourTokenUrl endpoint that the component makes to the API multiple times during it's lifecycle
    mockData: [
      {
        url: '/yourTokenUrl',
        method: 'POST',
        status: 200,
        response: {
          token: 'some-token'
        }
      }
    ]
  }
};

export const Default = () => {
  // import { DwollaWebOptions, useDwollaWeb } from '../useDwollaWeb';
  // import DwollaBusinessVCR from '../components/DwollaBusinessVCR';
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

  // Render the DwollaBusinessVCR component when ready
  return (
    <div style={{ width: '470px' }}>
      <DwollaBusinessVCR
        firstName="Jane"
        lastName="Doe"
        email="jane.doe@email.com"
        privacy="www.yourprivacy.com"
        terms="www.yourterms.com"
      />
    </div>
  );
};
