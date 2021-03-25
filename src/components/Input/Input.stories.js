import Input from './Input.vue';

export default {
  title: 'components/Input',
  component: Input,
};

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
