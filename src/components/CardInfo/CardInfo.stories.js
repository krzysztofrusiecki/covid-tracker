import CardInfo from './CardInfo.vue';

export default {
  title: 'components/CardInfo',
  component: CardInfo,
};

const Template = (args) => ({
  components: { CardInfo },
  setup() {
    return { args };
  },
  template: '<CardInfo v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  variant: 'infections',
  number: 342755,
  gain: 3411,
  description:
    'The total amount of people that have globally been diagnosed with the coronavirus.',
};

export const Main = Template.bind({});
Main.args = {
  variant: 'infections',
  number: 342755,
  gain: 3411,
  description:
    'The total amount of people that have globally been diagnosed with the coronavirus.',
  isMain: true,
};
