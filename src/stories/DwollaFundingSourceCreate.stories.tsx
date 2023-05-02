import type { DwollaWebOptions } from '../useDwollaWeb';
import { useDwollaWeb } from '../useDwollaWeb';
import { DwollaFundingSourceCreate } from '../components';
import type { Meta } from '@storybook/react';

const CUSTOMER_ID = '1234';

export const Default = () => {
  const options: DwollaWebOptions = {
    environment: 'sandbox',
    onError: (err) => console.error(err),
    onSuccess: (event) => console.log(event),
    tokenUrl: '/tokenUrl'
  };

  const { error, ready } = useDwollaWeb(options);
  if (!ready) return <div>Loading...</div>;
  if (error) return <div>Error: ${error.error}</div>;

  return (
    <div style={{ width: 470 }}>
      <DwollaFundingSourceCreate customerId={CUSTOMER_ID} />
    </div>
  );
};

export default {
  title: 'Drop-ins/DwollaFundingSourceCreate',
  component: Default,
  parameters: {
    mockData: [
      {
        method: 'POST',
        url: '/tokenUrl',
        status: 200,
        response: {
          token: 'some-token'
        }
      }
    ]
  }
} as Meta;
