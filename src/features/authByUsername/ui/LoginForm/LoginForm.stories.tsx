import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { LoginForm } from './LoginForm';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'feature/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
