import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title some',
  text: 'some text'
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title some',
  text: 'some text',
  theme: TextTheme.ERROR
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title some'
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'some text'
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  title: 'Title some',
  text: 'some text'
};
DarkPrimary.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyTitle = Template.bind({});
DarkOnlyTitle.args = {
  title: 'Title some'
};
DarkOnlyTitle.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOnlyText = Template.bind({});
DarkOnlyText.args = {
  text: 'some text'
};
DarkOnlyText.decorators = [ThemeDecorator(Theme.DARK)];
