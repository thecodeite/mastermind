import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GameBoard } from './GameBoard';
import { Game } from '../game';

export default {
  title: 'Mastermind/GameBoard',
  component: GameBoard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof GameBoard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GameBoard> = (args) => <GameBoard {...args} />;

const emptyGame: Game = {
  solution: ['red','green','blue','white'],
  turns: [],
  currentGuess: [],
}

export const NewGame = Template.bind({});
NewGame.args = {};

export const OneGuess = Template.bind({});
OneGuess.args = {
  initialGame: {
    ...emptyGame,
    turns: [
      {guess: ['red', 'red', 'green', 'blue'], score: {black: 1, white: 2}}
    ]
  }
};

export const GuessReady = Template.bind({});
GuessReady.args = {
  initialGame: {
    ...emptyGame,
    currentGuess:  ['yellow', 'yellow', 'green', 'blue'],
    turns: [
      {guess: ['red', 'red', 'green', 'blue'], score: {black: 1, white: 2}}
    ]
  }
};

export const CorrectButKeepGoing = Template.bind({});
CorrectButKeepGoing.args = {
  initialGame: {
    ...emptyGame,
    currentGuess:  ['red','green','blue','white'],
    turns: [
      {guess: ['red','green','blue','white'], score: {black: 4, white: 0}}
    ]
  }
};

export const GameWon = Template.bind({});
GameWon.args = {
  initialGame: {
    ...emptyGame,
    won: true,
    currentGuess:  ['red','green','blue','white'],
    turns: [
      {guess: ['red','green','blue','white'], score: {black: 4, white: 0}}
    ]
  }
};
