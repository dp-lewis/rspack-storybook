import 'normalize.css';
import { withThemeByClassName } from '@storybook/addon-themes';

import '../src/tokens/design-tokens.css';
import '../src/tokens/semantic-tokens.css';
import '../src/tokens/theme-dark.css';
import '../src/global.css';

const preview = {
  decorators: [
    withThemeByClassName<Renderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;