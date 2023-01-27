import React from 'react';
import type { FC } from 'react';
import useScript from 'react-script-hook';
import type { DwollaWebOptions } from './useDwollaWeb';
import { useDwollaWeb } from './useDwollaWeb';
import { render, screen } from '@testing-library/react';

// Mock useScript hook to avoid making network requests
jest.mock('react-script-hook');
const mockedScript = useScript as jest.Mock;

const ReadyState = {
  ERROR: 'ERROR',
  NOT_READY: 'NOT_READY',
  NO_ERROR: 'NO_ERROR',
  READY: 'READY'
};

const ScriptLoadingState = {
  ERROR: [false, 'SCRIPT_LOAD_ERROR'],
  LOADED: [false, null],
  LOADING: [true, null]
};

const HookComponent: FC<{ config: DwollaWebOptions }> = ({ config }) => {
  const { error, ready } = useDwollaWeb(config);

  return (
    <div>
      <p>{error ? ReadyState.ERROR : ReadyState.NO_ERROR}</p>
      <p>{ready ? ReadyState.READY : ReadyState.NOT_READY}</p>
    </div>
  );
};

describe('useDwollaWeb', () => {
  beforeEach(() => {
    mockedScript.mockImplementation(() => ScriptLoadingState.LOADED); // Mock react-script-hook to return a successful load state.

    window.dwolla = {
      configure: () => jest.fn()
    };
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  // sets token option and asserts that the ready state is true and there is no error.
  it('Should load with token', () => {
    const config: DwollaWebOptions = {
      environment: 'sandbox',
      onError: jest.fn(),
      onSuccess: jest.fn(),
      token: jest.fn()
    };

    render(<HookComponent config={config} />);
    expect(screen.getByText(ReadyState.NO_ERROR));
    expect(screen.getByText(ReadyState.READY));
  });

  // sets tokenUrl option and asserts that the ready state is true and there is no error.
  it('Should load with tokenUrl', () => {
    const config: DwollaWebOptions = {
      environment: 'sandbox',
      onError: jest.fn(),
      onSuccess: jest.fn(),
      tokenUrl: '/tokenUrl'
    };

    render(<HookComponent config={config} />);
    expect(screen.getByText(ReadyState.NO_ERROR));
    expect(screen.getByText(ReadyState.READY));
  });

  // asserts that the component is not ready yet and there is no error when the script is still loading.
  it('Should not be ready when script is loading', () => {
    mockedScript.mockImplementation(() => ScriptLoadingState.LOADING); // Mock react-script-hook to return a loading state.

    const config: DwollaWebOptions = {
      environment: 'sandbox',
      onError: jest.fn(),
      onSuccess: jest.fn(),
      token: jest.fn()
    };

    render(<HookComponent config={config} />);
    expect(screen.getByText(ReadyState.NO_ERROR));
    expect(screen.getByText(ReadyState.NOT_READY));
  });

  // asserts that when a required config option 'token' is not set, the component is not ready and there is an error.`
  it('Should not be ready if both token and token URL are missing', () => {
    const config: DwollaWebOptions = {
      environment: 'sandbox',
      onError: jest.fn(),
      onSuccess: jest.fn(),
      token: undefined as never // short circuit typescript for test
    };

    render(<HookComponent config={config} />);
    expect(screen.getByText(ReadyState.NO_ERROR));
    expect(screen.getByText(ReadyState.NOT_READY));
  });

  // asserts that when the script fails to load, the component is not ready and there is an error.
  it('Should not be ready if script fails to load', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleSpy = jest.spyOn(console, 'error').mockImplementationOnce(() => {});
    mockedScript.mockImplementation(() => ScriptLoadingState.ERROR); // Mock react-script-hook to return an error loading state.

    const config: DwollaWebOptions = {
      environment: 'sandbox',
      onError: jest.fn(),
      onSuccess: jest.fn(),
      token: jest.fn()
    };

    render(<HookComponent config={config} />);
    expect(screen.getByText(ReadyState.ERROR));
    expect(screen.getByText(ReadyState.NOT_READY));
    expect(consoleSpy).toHaveBeenCalledWith('Error loading Dwolla Web: ', 'SCRIPT_LOAD_ERROR');
  });
});
