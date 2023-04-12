import type {
  BalanceDisplayProps,
  BeneficialOwnersProps,
  BusinessVCRProps,
  ClientAccountOpeningProps,
  CreateCustomerProps,
  CreateFundingSourceProps,
  DocumentUploadProps,
  PayInProps,
  PersonalVCRProps,
  UpdateCustomerProps
} from './component-props';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dwolla-balance-display': BalanceDisplayProps;
      'dwolla-beneficial-owners': BeneficialOwnersProps;
      'dwolla-business-vcr': BusinessVCRProps;
      'dwolla-account-opening': ClientAccountOpeningProps;
      'dwolla-customer-create': CreateCustomerProps;
      'dwolla-document-upload': DocumentUploadProps;
      'dwolla-funding-source-create': CreateFundingSourceProps;
      'dwolla-payin': PayInProps;
      'dwolla-personal-vcr': PersonalVCRProps;
      'dwolla-customer-update': UpdateCustomerProps;
    }
  }
}
