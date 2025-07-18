import '../src/tokens/design-tokens.css';
import '../src/tokens/semantic-tokens.css';
import '../src/tokens/theme-dark.css';

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    themes: {
      default: 'Light',
      list: [
        { name: 'Light', class: '', color: '#fff', default: true },
        { name: 'Dark', class: 'theme-dark', color: '#222' }
      ],
      target: 'body',
    },
  },
};

export default preview;