import { useEffect, useState } from 'react';
import useScript from 'react-script-hook';
import { DWOLLA_WEB_STABLE_URL as URL } from './constants';
import type { CommonOptions, OptionsWithToken, OptionsWithTokenUrl } from './@types/dwolla-js';
import type { Rename } from './@types/utils';

/*
Pick all properties from CommonOptions except 'error' and 'success'.
Pick 'error' and 'success' from CommonOptions and rename them to 'onError' and 'onSuccess' respectively.
Combine all properties to form a new type Options.
*/
type Options = Omit<CommonOptions, 'error' | 'success'> &
  Rename<Pick<CommonOptions, 'error'>, 'error', 'onError'> &
  Rename<Pick<CommonOptions, 'success'>, 'success', 'onSuccess'>;

// Create a new type 'WithToken' which extends Options and includes the token property from OptionsWithToken
type WithToken = Options & Pick<OptionsWithToken, 'token'>;

// Create a new type 'WithTokenUrl' which extends Options and includes the tokenUrl property from OptionsWithTokenUrl
type WithTokenUrl = Options & Pick<OptionsWithTokenUrl, 'tokenUrl'>;

// Create a new type 'DwollaWebOptions' which is a union of 'WithToken' and 'WithTokenUrl'
export type DwollaWebOptions = WithToken | WithTokenUrl;

export const useDwollaWeb = (options: DwollaWebOptions) => {
  const [isScriptLoading, scriptError] = useScript({
    checkForExisting: true,
    src: URL
  });

  const [isDwollaLoaded, setDwollaLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (isScriptLoading) return;

    if (!(options as WithToken).token && !(options as WithTokenUrl).tokenUrl) {
      return;
    }

    if (scriptError || !window.dwolla) {
      console.error('Error loading Dwolla Web: ', scriptError);
      return;
    }

    window.dwolla.configure({
      ...options,
      error: options.onError,
      success: options.onSuccess
    });

    setDwollaLoaded(true);
  }, [scriptError, isScriptLoading]);

  const isReady = isDwollaLoaded && !isScriptLoading;

  return {
    error: scriptError,
    ready: isReady
  };
};
