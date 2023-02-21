import { useDwollaWeb, DwollaWebOptions } from '../useDwollaWeb';
import DwollaPayIn from '../components/DwollaPayIn';

export default {
  title: 'Drop-ins/DwollaPayIn',
  component: DwollaPayIn
};

export const Default = () => {
  // import { DwollaWebOptions, useDwollaWeb } from '../useDwollaWeb';
  // import DwollaPayIn from '../components/DwollaPayIn';
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

  // Render the DwollaPayIn component when ready
  return (
    <div style={{ width: '470px' }}>
      <DwollaPayIn customerId="some-customer-id" amount={10.0} blob={''} token={''} />
    </div>
  );
};
