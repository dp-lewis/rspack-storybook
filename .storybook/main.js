const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-themes'
  ],
  framework: {
    name: 'storybook-react-rsbuild',
    options: {}
  }
};

export default config;