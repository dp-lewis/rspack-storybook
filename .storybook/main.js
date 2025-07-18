const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-docs'
  ],
  framework: {
    name: 'storybook-react-rsbuild',
    options: {}
  }
};

export default config;