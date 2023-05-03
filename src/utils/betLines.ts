import { MatrixType } from '../types';

const combOne = (arr: MatrixType): number[] => arr.map((reel) => reel[1]);

const combTwo = (arr: MatrixType): number[] => arr.map((reel) => reel[1]);

const combThree = (arr: MatrixType): number[] => arr.map((reel) => reel[2]);

const combFour = (arr: MatrixType): number[] => {
  return arr.map((reel, i) => reel[i > 2 ? reel.length - i + 1 : i]);
};

const combFive = (arr: MatrixType): number[] => {
  return arr.map((reel, i) => reel[Math.abs(reel.length - i - 1)]);
};

const combSix = (arr: MatrixType): number[] => arr.map((reel, i) => reel[i % 2 ? 0 : 1]);

const combSeven = (arr: MatrixType): number[] => arr.map((reel, i) => reel[i % 2 ? 2 : 1]);

const combEight = (arr: MatrixType): number[] => arr.map((reel, i) => reel[i % 2 ? 1 : 0]);

const combNine = (arr: MatrixType): number[] => arr.map((reel, i) => reel[i % 2 ? 1 : 2]);

const combTen = (arr: MatrixType): number[] => arr.map((reel, i) => reel[i % 2 ? 2 : 0]);

const combEleven = (arr: MatrixType): number[] => arr.map((reel, i) => reel[i % 2 ? 0 : 2]);

const combTwelve = (arr: MatrixType): number[] => {
  return arr.map((reel, i) => {
    let pushIndex = 1;

    if (!i) pushIndex = 0;
    else if (i === arr.length - 1) pushIndex = 2;

    return reel[pushIndex];
  });
};

const combThirteen = (arr: MatrixType): number[] => {
  return arr.map((reel, i) => {
    let pushIndex = 1;

    if (!i) pushIndex = 2;
    else if (i === arr.length - 1) pushIndex = 0;

    return reel[pushIndex];
  });
};

const combFourteen = (arr: MatrixType): number[] => {
  return arr.map((reel, i) => {
    let pushIndex = 0;

    if (i === 2) pushIndex = 1;
    else if (i > 2) pushIndex = 2;

    return reel[pushIndex];
  });
};

const combFifteen = (arr: MatrixType): number[] => {
  return arr.map((reel, i) => {
    let pushIndex = 2;

    if (i === 2) pushIndex = 1;
    else if (i > 2) pushIndex = 0;

    return reel[pushIndex];
  });
};

const combSixteen = (arr: MatrixType): number[] => arr.map((reel, i) => reel[i === 2 ? 2 : 0]);

const combSevenTeen = (arr: MatrixType): number[] => arr.map((reel, i) => reel[i === 2 ? 0 : 2]);

const combEightTeen = (arr: MatrixType): number[] => {
  return arr.map((reel, i) => {
    let pushIndex = 1;

    if (i === 1) pushIndex = 2;
    else if (i === 3) pushIndex = 0;

    return reel[pushIndex];
  });
};

const combNineTeen = (arr: MatrixType): number[] => {
  return arr.map((reel, i) => {
    let pushIndex = 1;

    if (i === 1) pushIndex = 0;
    else if (i === 3) pushIndex = 2;

    return reel[pushIndex];
  });
};

const combTwenty = (arr: MatrixType): number[] => arr.map((reel, i) => reel[!i ? 0 : 1]);

export const combinations = [
  combOne,
  combTwo,
  combThree,
  combFour,
  combFive,
  combSix,
  combSeven,
  combEight,
  combNine,
  combTen,
  combEleven,
  combTwelve,
  combThirteen,
  combFourteen,
  combFifteen,
  combSixteen,
  combSevenTeen,
  combEightTeen,
  combNineTeen,
  combTwenty,
];
