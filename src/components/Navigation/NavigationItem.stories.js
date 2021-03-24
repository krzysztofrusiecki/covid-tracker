import { action } from '@storybook/addon-actions';

import NavigationItem from './NavigationItem.vue';

export default {
  title: 'components/NavigationItem',
  component: NavigationItem,
  argTypes: {
    onClick: action('onClick'),
  },
};

const Template = (args) => ({
  components: { NavigationItem },
  setup() {
    return { args };
  },
  template: '<NavigationItem v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  country: 'Poland',
  totalInfections: 5359114,
  ordinalNumber: 1,
};

export const Active = Template.bind({});
Active.args = {
  country: 'Poland',
  totalInfections: 5359114,
  ordinalNumber: 1,
  isActive: true,
};

export const World = Template.bind({});
World.args = {
  isWorldStats: true,
  totalInfections: 13291041,
};
