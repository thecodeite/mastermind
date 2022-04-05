import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GameTurn } from './GameTurn';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Mastermind/GameTurn',
  component: GameTurn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GameTurn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GameTurn> = (args) => <GameTurn {...args} />;

export const Complete = Template.bind({});
Complete.args = {
  guess: ['red', 'green', 'blue', 'yellow'],
  score: {black: 1, white: 2},
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
