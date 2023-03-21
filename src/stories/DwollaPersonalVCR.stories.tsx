import type { DwollaWebOptions } from '../useDwollaWeb';
import { useDwollaWeb } from '../useDwollaWeb';
import DwollaPersonalVCR from '../components/DwollaPersonalVCR';

export default {
  title: 'Drop-ins/DwollaPersonalVCR',
  component: DwollaPersonalVCR,
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
  // import type { DwollaWebOptions } from '@dwolla/react-drop-ins';
  // import { useDwollaWeb, DwollaPersonalVCR } from '@dwolla/react-drop-ins';

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

  // Render the DwollaPersonalVCR component when ready
  return (
    <div style={{ width: '470px' }}>
      <DwollaPersonalVCR
        firstName="Jane"
        lastName="Doe"
        email="jane.doe@email.com"
        privacy="www.yourprivacy.com"
        terms="www.yourterms.com"
      />
    </div>
  );
};
