import type { MaybePromise } from './utils';

export interface CommonOptions {
  environment: 'production' | 'sandbox';
  error: <TError = unknown>(err: TError) => MaybePromise<void>;
  styles?: string;
  success: <TResponse = unknown>(event: SuccessEvent<TResponse>) => MaybePromise<void>;
}

export interface Dwolla {
  configure: (options: Options) => void;
}

export interface HalLink {
  href: string;
}

export interface OptionsWithToken extends CommonOptions {
  token: (req: TokenRequest) => MaybePromise<void>;
}

export interface OptionsWithTokenUrl extends CommonOptions {
  tokenUrl: string;
}

export interface SuccessEvent<T> {
  resource: string;
  response: T;
}

export interface TokenLinks {
  'beneficial-owner'?: HalLink;
  client?: HalLink;
  customer?: HalLink;
}

export interface TokenRequest {
  action: string;
  links: TokenLinks;
}

export type Options = OptionsWithToken | OptionsWithTokenUrl;

declare global {
  interface Window {
    dwolla?: Dwolla;
  }
}
