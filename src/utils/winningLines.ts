import { MatrixType } from '../types';

export const combinations = () => {
  function combOne(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel) => temp.push(reel[1]));
    return temp;
  }

  function combTwo(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel) => temp.push(reel[0]));
    return temp;
  }

  function combThree(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel) => temp.push(reel[2]));
    return temp;
  }

  function combFour(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[i > 2 ? (reel.length - 1) % i : i]));
    return temp;
  }

  function combFive(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[Math.abs(reel.length - 1 - i)]));
    return temp;
  }

  function combSix(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[i % 2 ? 0 : 1]));
    return temp;
  }

  function combSeven(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[i % 2 ? 2 : 1]));
    return temp;
  }

  function combEight(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[i % 2 ? 1 : 0]));
    return temp;
  }

  function combNine(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[i % 2 ? 1 : 2]));
    return temp;
  }

  function combTen(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[i % 2 ? 2 : 0]));
    return temp;
  }

  function combEleven(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[i % 2 ? 0 : 2]));
    return temp;
  }

  function combTwelve(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => {
      let pushIndex = 1;
      if (!i) pushIndex = 0;
      else if (i === arr.length - 1) pushIndex = 2;
      temp.push(reel[pushIndex]);
    });
    return temp;
  }

  function combThirteen(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => {
      let pushIndex = 1;
      if (!i) pushIndex = 2;
      else if (i === arr.length - 1) pushIndex = 0;
      temp.push(reel[pushIndex]);
    });
    return temp;
  }

  function combFourteen(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => {
      let pushIndex = 0;
      if (i === 2) pushIndex = 1;
      else if (i > 2) pushIndex = 2;
      temp.push(reel[pushIndex]);
    });
    return temp;
  }

  function combFifteen(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => {
      let pushIndex = 2;
      if (i === 2) pushIndex = 1;
      else if (i > 2) pushIndex = 0;
      temp.push(reel[pushIndex]);
    });
    return temp;
  }

  function combSixteen(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[i === 2 ? 2 : 0]));
    return temp;
  }

  function combSevenTeen(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[i === 2 ? 0 : 2]));
    return temp;
  }

  function combEightTeen(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => {
      let pushIndex = 1;
      if (i === 1) pushIndex = 2;
      else if (i === 3) pushIndex = 0;
      temp.push(reel[pushIndex]);
    });
    return temp;
  }

  function combNineTeen(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => {
      let pushIndex = 1;
      if (i === 1) pushIndex = 0;
      else if (i === 3) pushIndex = 2;
      temp.push(reel[pushIndex]);
    });
    return temp;
  }

  function combTwenty(arr: MatrixType): number[] {
    const temp: number[] = [];
    arr.forEach((reel, i) => temp.push(reel[!i ? 0 : 1]));
    return temp;
  }

  return [
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
};
