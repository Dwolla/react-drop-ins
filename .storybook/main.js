/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  addons: [
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-mock'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource'
    });
    return config;
  }
};

module.exports = config;
