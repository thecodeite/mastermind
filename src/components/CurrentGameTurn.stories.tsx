import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CurrentGameTurn } from './GameTurn';
import { Game } from '../game';

export default {
  title: 'Mastermind/CurrentGameTurn',
  component: CurrentGameTurn,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CurrentGameTurn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CurrentGameTurn> = (args) => <CurrentGameTurn {...args} />;

const game: Game = {
  solution: ['red','red','red','red'],
  turns: [],
  currentGuess: [],
}

export const StartGuessing = Template.bind({});
StartGuessing.args = {
  game: {
    ...game,
  }
};

export const Guessing = Template.bind({});
Guessing.args = {
  game: {
    ...game,
    currentGuess: ['red','white'],
  }
};

export const GoodGuess = Template.bind({});
GoodGuess.args = {
  game: {
    ...game,
    currentGuess:[ 'blue', 'yellow','black','white'],
  }
};