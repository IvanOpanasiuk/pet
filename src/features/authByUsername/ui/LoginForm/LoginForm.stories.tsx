import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

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
Primary.decorators = [StoreDecorator({
  loginForm: { username: '123', password: '123' }
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
  loginForm: { username: '123', password: '123', error: 'Error' }
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  loginForm: { isLoading: true }
})];
