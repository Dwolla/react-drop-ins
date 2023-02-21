import { useDwollaWeb, DwollaWebOptions } from '../useDwollaWeb';
import DwollaCustomerUpgrade from '../components/DwollaCustomerUpgrade';

export default {
  title: 'Drop-ins/DwollaCustomerUpgrade',
  component: DwollaCustomerUpgrade
};

export const Default = () => {
  // import { DwollaWebOptions, useDwollaWeb } from '../useDwollaWeb';
  // import DwollaCustomerUpgrade from '../components/DwollaCustomerUpgrade';
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

  // Render the DwollaCustomerUpgrade component when ready
  return (
    <div style={{ width: '470px' }}>
      <DwollaCustomerUpgrade customerId="customer-id-to-upgrade" firstName="John" lastName="Doe" />
    </div>
  );
};
