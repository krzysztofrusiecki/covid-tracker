import Navigation from './Navigation.vue';

export default {
  title: 'components/Navigation',
  component: Navigation,
};

const Template = (args) => ({
  components: { Navigation },
  setup() {
    return { args };
  },
  template: '<Navigation v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  countries: [
    {
      name: 'Poland',
      totalInfections: 2291129,
    },
    {
      name: 'France',
      totalInfections: 5125125,
    },
    {
      name: 'Germany',
      totalInfections: 4172827,
    },
    {
      name: 'United Kingdom',
      totalInfections: 9371377,
    },
    {
      name: 'Italy',
      totalInfections: 682737,
    },
    {
      name: 'Spain',
      totalInfections: 51678,
    },
    {
      name: 'Portugal',
      totalInfections: 295118,
    },
    {
      name: 'Greece',
      totalInfections: 666,
    },
    {
      name: 'China',
      totalInfections: 9371377,
    },
    {
      name: 'Japan',
      totalInfections: 682737,
    },
    {
      name: 'USA',
      totalInfections: 51678,
    },
    {
      name: 'Brazil',
      totalInfections: 295118,
    },
    {
      name: 'RPA',
      totalInfections: 666,
    },
  ],
};
