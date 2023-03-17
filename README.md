# react-drop-ins 

React bindings for Dwolla's [drop-in components](https://developers.dwolla.com/concepts/drop-in-components). This library provides a React hook for importing the `dwolla-web.js` library and a set of React components for using the drop-in components.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Examples](#examples)
* [Changelog](#changelog)
* [Community](#community)
* [Additional Resources](#additional-resources)

## Installation

```shell
# using npm
$ npm install --save @dwolla/react-drop-ins

# using yarn
$ yarn add @dwolla/react-drop-ins

# using pnpm
$ pnpm add @dwolla/react-drop-ins
```

## Usage

In order to use this package, you will first need to set up your application to be able to make calls to the Dwolla API. You can use one of our [SDKs](https://developers.dwolla.com/sdks-tools) in your preferred language to get up and running quickly. 

Then you will need to set up a server-side endpoint for generating client tokens. You can do this by following the steps in the [Generate a Client Token](https://developers.dwolla.com/guides/drop-ins/generate-client-token) guide.

You're now ready to start using the package! 

Create a configuration object for the `useDwollaWeb` hook as shown in the code example below. This hook will import the `dwolla-web.js` library and handle any errors that may occur during import. 

_The full list of configuration options for the hook can be found in the [table](#configuration-options-for-usedwollaweb) below._


```typescript
// Import the useDwollaWeb hook and the DwollaCustomerCreate component
import { DwollaCustomerCreate, DwollaWebOptions, useDwollaWeb } from 'react-drop-ins';

// Create configuration for the useDwollaWeb hook
const config: DwollaWebOptions = {
environment: 'sandbox',
onError: function error() {
    console.log('Error');
},
onSuccess: function success() {
    console.log('Success');
},
tokenUrl: '/yourTokenUrl'
};

const App = () => {
  // Initialize the useDwollaWeb hook
  const { ready, error } = useDwollaWeb(config);

  // Wait for the hook to be ready
  if (!ready) return <div>Loading...</div>;

  // Handle errors
  if (error) return <div>Error</div>;

  // Render the DwollaCustomerCreate component when ready
  return (
    <>
      <DwollaCustomerCreate />
    </>
  );
};

export default App;
```

### Configuration options for `useDwollaWeb`

| Parameter   | Type     | Required? | Description                                                                                                                                                                                         |
| ----------- | -------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| environment | string   | yes | Acceptable values of: `sandbox` or `production`                                                                                                                                                     |
| styles      | string   | no | Optional. A relative or absolute URL linking to a hosted stylesheet containing component styles.                                                                                                    |
| token       | function | conditional | A function that gets called by the component for fetching client-tokens as needed throughout the flow. <br /> Example usage: `token: (req) => Promise.resolve(dwollaAPIToken(req, {blah: "abcd"}))` <br /> Not required if `tokenUrl` is used. |
| tokenUrl    | function | conditional | A URL pointing to a server-side endpoint that can be used to generate client-token. <br /> Example usage: `tokenUrl: "tokenUrl"`. <br /> Not required if `token` is used.                                                                   |
| success     | function | no |  A function that gets called upon a successful request from the Component.                                                                                                                           |
| error       | function | no |  A function that gets called when an error occurs in the Component.                                                                                                                                  |

**Note:** You can use either `token` or `tokenUrl` in the config options for generating a client token, but not both. Check out the [tokenUrl vs token configuration](https://developers.dwolla.com/guides/drop-ins/generate-client-token#token-url-vs-token-configuration) section in the docs for more information on the differences between the two.

## Examples

An example React component demonstrating how to use the library and the `DwollaCustomerCreate` component can be found in the [examples](https://github.com/Dwolla/react-drop-ins/tree/main/src/examples) directory.

For a full list of all available components and their usage, check out the [Storybook](https://dwolla.github.io/react-drop-ins/). Switch to the `Docs` tab and click on `Show code` to see the implementation code example for each component.

## Changelog

- **1.0.0** Initial release of React bindings for Dwolla's drop-in components.

## Community
* If you have any feedback, please reach out to us on [our forums](https://discuss.dwolla.com/) or by [creating a GitHub issue](https://github.com/Dwolla/react-drop-ins/issues).
* If you would like to contribute to this library, [bug reports](https://github.com/Dwolla/react-drop-ins/issues) and [pull requests](https://github.com/Dwolla/react-drop-ins/pulls) are always appreciated!

## Additional Resources

To learn more about Dwolla and how to integrate our product with your application, please consider visiting some of the following resources and becoming a member of our community!

* [Dwolla](https://www.dwolla.com/)
* [Dwolla Developers](https://developers.dwolla.com/)
* [Developer Support Forum](https://discuss.dwolla.com/)