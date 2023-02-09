import type {
  BalanceDisplayAttributes,
  BeneficialOwnersAttributes,
  BusinessVCRAttributes,
  ClientAccountOpeningAttributes,
  CreateCustomerAttributes,
  DocumentUploadAttributes,
  PayInAttributes,
  PersonalVCRAttributes,
  UpdateCustomerAttributes
} from './component-attributes';

import type { DetailedHTMLProps } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dwolla-balance-display': DetailedHTMLProps<
        BalanceDisplayAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-beneficial-owners': DetailedHTMLProps<
        BeneficialOwnersAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-business-vcr': DetailedHTMLProps<BusinessVCRAttributes<HTMLElement>, HTMLElement>;

      'dwolla-account-opening': DetailedHTMLProps<
        ClientAccountOpeningAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-customer-create': DetailedHTMLProps<
        CreateCustomerAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-document-upload': DetailedHTMLProps<
        DocumentUploadAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-payin': DetailedHTMLProps<PayInAttributes<HTMLElement>, HTMLElement>;

      'dwolla-personal-vcr': DetailedHTMLProps<PersonalVCRAttributes<HTMLElement>, HTMLElement>;

      'dwolla-customer-update': DetailedHTMLProps<
        UpdateCustomerAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
