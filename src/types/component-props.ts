export interface ClientAccountOpeningProps
  extends WithCorrelation,
    WithPersonalInformation,
    WithPrivacyAndTerms {
  clientAccountId?: string;
  hideDBAField?: boolean;
  website?: string;
}

export interface BalanceDisplayProps extends WithCustomer {
  hideZeroBalance?: boolean;
}

export type BeneficialOwnersProps = WithCustomer;

export interface BusinessVCRProps
  extends WithCorrelation,
    WithPersonalInformation,
    WithPrivacyAndTerms {
  customerId?: string;
  hideDBAField?: boolean;
}

export interface CreateCustomerProps
  extends WithCorrelation,
    WithPersonalInformation,
    WithPrivacyAndTerms {
  businessName?: string;
  isBusiness?: boolean;
  type?: 'receive-only';
}

export type DocumentUploadProps = WithCustomer;

export interface PayInProps extends WithCustomer {
  amount?: number;
  blob: string;
  token: string;
}

export interface PersonalVCRProps
  extends WithCorrelation,
    WithPersonalInformation,
    WithPrivacyAndTerms {
  customerId?: string;
}

export type UpdateCustomerProps = WithCorrelation &
  WithCustomer &
  WithPersonalInformation &
  WithPrivacyAndTerms;

interface WithCorrelation {
  correlationId?: string;
}

interface WithCustomer {
  customerId: string;
}

interface WithPersonalInformation {
  email?: string;
  firstName?: string;
  ipAddress?: string;
  lastName?: string;
}

interface WithPrivacyAndTerms {
  privacy?: string;
  terms?: string;
}
