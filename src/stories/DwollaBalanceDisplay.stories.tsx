import { useDwollaWeb, DwollaWebOptions } from '../useDwollaWeb';
import DwollaBalanceDisplay from '../components/DwollaBalanceDisplay';

export default {
  title: 'Drop-ins/DwollaBalanceDisplay',
  component: DwollaBalanceDisplay
};

export const Default = () => {
  // import { DwollaWebOptions, useDwollaWeb } from '../useDwollaWeb';
  // import DwollaBalanceDisplay from '../components/DwollaBalanceDisplay';
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

  // Render the DwollaBalanceDisplay component when ready
  return <DwollaBalanceDisplay customerId="some-customer-id" />;
};
