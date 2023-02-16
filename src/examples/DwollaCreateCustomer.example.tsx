// Description: Example showing usage of the DwollaCustomerCreate component

// Import the useDwollaWeb hook and the DwollaCustomerCreate component
import { DwollaWebOptions, useDwollaWeb } from '../useDwollaWeb';
import DwollaCustomerCreate from '../components/DwollaCustomerCreate';

// Create a functional component
const DwollaCustomerCreateExample = () => {
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
