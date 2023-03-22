// Description: Example showing usage of the DwollaCustomerCreate component

// Import the useDwollaWeb hook and the DwollaCustomerCreate component
import { DwollaCustomerCreate, useDwollaWeb } from '@dwolla/react-drop-ins';
import type { DwollaWebOptions } from '@dwolla/react-drop-ins';

// Create a functional component
const DwollaCustomerCreateExample = () => {
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

  // Render the DwollaCustomerCreate component when ready
  return (
    <>
      {/* Calling DwollaCustomerCreate component with available optional attributes*/}
      <DwollaCustomerCreate
        firstName="Jane"
        lastName="Doe"
        isBusiness
        businessName="Some Business"
        correlationId="123abc"
      />
    </>
  );
};

export default DwollaCustomerCreateExample;
