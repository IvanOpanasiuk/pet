import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam ipsam facere, modi itaque at perferendis.Amet saepe consectetur, repudiandae tenetur porro expedita,illo, excepturi ipsum nostrum deleniti adipisci cumque quibusdam.'
};

// export const Dark = Template.bind({});
// Dark.args = {
//   isOpen: true,
//   children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Veniam ipsam facere, modi itaque at perferendis.Amet saepe consectetur, repudiandae tenetur porro expedita,illo, excepturi ipsum nostrum deleniti adipisci cumque quibusdam.'
// };

// Dark.decorators = [ThemeDecorator(Theme.DARK)];
