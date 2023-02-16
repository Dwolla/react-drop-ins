import type { HTMLAttributes } from 'react';

export interface ClientAccountOpeningAttributes<T>
  extends HTMLAttributes<T>,
    WithCorrelation,
    WithPersonalInformation,
    WithPrivacyAndTerms {
  clientAccountId?: string;
  hideDBAField?: boolean;
  website?: string;
}

export interface BalanceDisplayAttributes<T> extends HTMLAttributes<T>, WithCustomer {
  hideZeroBalance?: boolean;
}

export interface BeneficialOwnersAttributes<T> extends HTMLAttributes<T>, WithCustomer {}

export interface BusinessVCRAttributes<T>
  extends HTMLAttributes<T>,
    WithCorrelation,
    WithPersonalInformation,
    WithPrivacyAndTerms {
  customerId?: string;
  hideDBAField?: boolean;
}

export interface CreateCustomerAttributes<T>
  extends HTMLAttributes<T>,
    WithCorrelation,
    WithPersonalInformation,
    WithPrivacyAndTerms {
  businessName?: string;
  isBusiness?: boolean;
  type?: 'receive-only';
}

export interface DocumentUploadAttributes<T> extends HTMLAttributes<T>, WithCustomer {}

export interface PayInAttributes<T> extends HTMLAttributes<T>, WithCustomer {
  amount?: number;
  blob: string;
  token: string;
}

export interface PersonalVCRAttributes<T>
  extends HTMLAttributes<T>,
    WithCorrelation,
    WithPersonalInformation,
    WithPrivacyAndTerms {
  customerId?: string;
}

export interface UpdateCustomerAttributes<T>
  extends HTMLAttributes<T>,
    WithCorrelation,
    WithCustomer,
    WithPersonalInformation,
    WithPrivacyAndTerms {}

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
