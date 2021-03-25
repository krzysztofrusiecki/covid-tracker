import '../src/assets/main.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (story) => ({
    components: { story },
    template:
      '<div style="margin: 2em; border: 1px dashed lightgrey; box-sizing: border-box;"><story /></div>',
  }),
];
