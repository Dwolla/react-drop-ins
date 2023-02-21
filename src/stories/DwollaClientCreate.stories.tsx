import { useDwollaWeb, DwollaWebOptions } from '../useDwollaWeb';
import DwollaClientCreate from '../components/DwollaClientCreate';

export default {
  title: 'Drop-ins/DwollaClientCreate',
  component: DwollaClientCreate
};

export const Default = () => {
  // import { DwollaWebOptions, useDwollaWeb } from '../useDwollaWeb';
  // import DwollaClientCreate from '../components/DwollaClientCreate';
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

  // Render the DwollaClientCreate component when ready
  return (
    <div style={{ width: '470px' }}>
      <DwollaClientCreate
        firstName="John"
        lastName="Doe"
        privacy="www.yourprivacy.com"
        terms="www.yourterms.com"
      />
    </div>
  );
};
