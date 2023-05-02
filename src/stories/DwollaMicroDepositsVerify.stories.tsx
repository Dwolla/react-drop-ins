import type { DwollaWebOptions } from '../useDwollaWeb';
import { useDwollaWeb } from '../useDwollaWeb';
import { DwollaMicroDepositsVerify } from '../components';
import type { Meta } from '@storybook/react';

const CUSTOMER_ID = '1234';
const FUNDING_SOURCE_ID = '5678';

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
      <DwollaMicroDepositsVerify customerId={CUSTOMER_ID} fundingSourceId={FUNDING_SOURCE_ID} />
    </div>
  );
};

export default {
  title: 'Drop-ins/DwollaMicroDepositsVerify',
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
      },
      {
        method: 'GET',
        url: `https://api-sandbox.dwolla.com/customers/${CUSTOMER_ID}/funding-sources?removed=false`,
        status: 200,
        response: {
          _embedded: {
            'funding-sources': [
              {
                _links: {
                  'verify-micro-deposits': {}
                },
                id: FUNDING_SOURCE_ID
              }
            ]
          }
        }
      }
    ]
  }
} as Meta;
