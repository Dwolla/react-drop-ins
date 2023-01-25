import type { DwollaWeb } from './component-attributes';
import type { DetailedHTMLProps } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'dwolla-balance-display': DetailedHTMLProps<
        DwollaWeb.Attributes.BalanceDisplayAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-beneficial-owners': DetailedHTMLProps<
        DwollaWeb.Attributes.BeneficialOwnersAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-business-vcr': DetailedHTMLProps<
        DwollaWeb.Attributes.BusinessVCRAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-client-creation': DetailedHTMLProps<
        DwollaWeb.Attributes.ClientAccountOpeningAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-customer-create': DetailedHTMLProps<
        DwollaWeb.Attributes.CreateCustomerAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-document-upload': DetailedHTMLProps<
        DwollaWeb.Attributes.DocumentUploadAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-payin': DetailedHTMLProps<
        DwollaWeb.Attributes.PayInAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-personal-vcr': DetailedHTMLProps<
        DwollaWeb.Attributes.PersonalVCRAttributes<HTMLElement>,
        HTMLElement
      >;

      'dwolla-customer-update': DetailedHTMLProps<
        DwollaWeb.Attributes.UpdateCustomerAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
