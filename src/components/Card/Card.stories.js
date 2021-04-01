import Card from './Card.vue';

export default {
  title: 'components/Card',
  component: Card,
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args" />',
});

export const Infections = Template.bind({});
Infections.args = {
  variant: 'infections',
};

export const Deaths = Template.bind({});
Deaths.args = {
  variant: 'deaths',
};

export const Recovered = Template.bind({});
Recovered.args = {
  variant: 'recovered',
};

export const Infected = Template.bind({});
Infected.args = {
  variant: 'infected',
};

export const Totals = Template.bind({});
Totals.args = {
  variant: 'totals',
};

export const Changes = Template.bind({});
Changes.args = {
  variant: 'changes',
};
