import { TextStyle } from 'pixi.js';

export const REEL_WIDTH = 160;
export const SYMBOL_SIZE = 150;
export const lineCount = 5;
export const lineLength = 3;

export const userWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
export const userHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

export const width = 1366;
export const height = 649;
export const coinValues = ['0.01', '0.02', '0.05', '0.10', '0.20', '0.50', '1.00'];

export const ratio = width / 1326;

export const style = new TextStyle({
  fontSize: 20,
  fill: '#ffffff',
});
export const headerStyle = new TextStyle({
  fontSize: 20,
  fontWeight: '600',
  fill: '#8b0000',
});

export const WILD_SYMBOL = '0';
export const A_SYMBOL = '1';
export const J_SYMBOL = '2';
export const K_SYMBOL = '3';
export const Q_SYMBOL = '4';
export const TEN_SYMBOL = '5';
export const COINS_SYMBOL = '6';
export const GREEN_DRAGON_SYMBOL = '7';
export const PRINCES_SYMBOL = '8';
export const YELLOW_DRAGON_SYMBOL = '9';

export const symbolPayoutValue: {
  [key: string]: {
    [key: number]: number;
  };
} = {
  [WILD_SYMBOL]: {
    2: 4,
    3: 100,
    4: 300,
    5: 500,
  },
  [PRINCES_SYMBOL]: {
    2: 2,
    3: 40,
    4: 200,
    5: 400,
  },
  [YELLOW_DRAGON_SYMBOL]: {
    3: 30,
    4: 150,
    5: 300,
  },
  [GREEN_DRAGON_SYMBOL]: {
    3: 20,
    4: 100,
    5: 250,
  },
  [COINS_SYMBOL]: {
    3: 20,
    4: 75,
    5: 200,
  },
  [A_SYMBOL]: {
    3: 10,
    4: 50,
    5: 160,
  },
  [K_SYMBOL]: {
    3: 10,
    4: 40,
    5: 140,
  },
  [Q_SYMBOL]: {
    3: 5,
    4: 30,
    5: 120,
  },
  [J_SYMBOL]: {
    3: 5,
    4: 25,
    5: 110,
  },
  [TEN_SYMBOL]: {
    3: 5,
    4: 20,
    5: 100,
  },
};
