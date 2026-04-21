export interface ClientAccountOpeningProps
  extends WithCorrelation, WithPersonalInformation, WithPrivacyAndTerms {
  clientAccountId?: string;
  hideDBAField?: boolean;
  website?: string;
}

export interface BalanceDisplayProps extends WithCustomer {
  hideZeroBalance?: boolean;
}

export type BeneficialOwnersProps = WithCustomer;

export interface BusinessVCRProps
  extends WithCorrelation, WithPersonalInformation, WithPrivacyAndTerms {
  customerId?: string;
  hideDBAField?: boolean;
}

export interface CreateCustomerStandardProps
  extends WithCorrelation, WithPersonalInformation, WithPrivacyAndTerms {
  businessName?: string;
  isBusiness?: boolean;
  type?: never;
}

export interface CreateCustomerReceiveOnlyProps extends WithCorrelation, WithPersonalInformation {
  businessName?: string;
  isBusiness?: boolean;
  type: 'receive-only';
  privacy: string;
  terms: string;
}

export type CreateCustomerProps = CreateCustomerStandardProps | CreateCustomerReceiveOnlyProps;

export interface CreateFundingSourceProps extends WithCustomer {
  initiateMicroDeposits?: boolean;
}

export type DocumentUploadProps = WithCustomer;

export interface PayInProps extends WithCustomer {
  amount?: number;
  blob: string;
  token: string;
}

export interface PersonalVCRProps
  extends WithCorrelation, WithPersonalInformation, WithPrivacyAndTerms {
  customerId?: string;
}

export type UpdateCustomerProps = WithCorrelation &
  WithCustomer &
  WithPersonalInformation &
  WithPrivacyAndTerms;

export interface VerifyMicroDepositsProps extends WithCustomer {
  fundingSourceId: string;
}

export interface WithCorrelation {
  correlationId?: string;
}

export interface WithCustomer {
  customerId: string;
}

export interface WithPersonalInformation {
  email?: string;
  firstName?: string;
  ipAddress?: string;
  lastName?: string;
}

export interface WithPrivacyAndTerms {
  privacy?: string;
  terms?: string;
}
