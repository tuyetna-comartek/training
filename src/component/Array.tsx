import { useState } from "react";

export const sortArrayName = (arr: any, orderBy: string) => {
  if (orderBy === "Asc") {
    return arr.sort((a: any, b: any) => {
      const itemA = a.firstName.toUpperCase();
      const itemB = b.firstName.toUpperCase();
      if (itemA < itemB) {
        return -1;
      }
      if (itemA > itemB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  } else if (orderBy === "Desc") {
    return arr.sort((a: any, b: any) => {
      const itemA = a.firstName.toUpperCase();
      const itemB = b.firstName.toUpperCase();
      if (itemA > itemB) {
        return -1;
      }
      if (itemA < itemB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
};

export const sortArrayScore = (arr: any, orderBy: string) => {
  if (orderBy === "Asc") {
    return arr.sort((a: any, b: any) => {
      const itemA = a.medium;
      const itemB = b.medium;
      if (itemA < itemB) {
        return -1;
      }
      if (itemA > itemB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  } else if (orderBy === "Desc") {
    return arr.sort((a: any, b: any) => {
      const itemA = a.medium;
      const itemB = b.medium;
      if (itemA > itemB) {
        return -1;
      }
      if (itemA < itemB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }
};

export const onMediumScore = (arr: Array<any>) => {
  const newArr = arr.reduce((acc, obj) => {
    console.log("obj: ", obj);
    const initialValue = 0;

    const key = obj.subjects.reduce((score: any, row: any) => {
      return score + row.score;
    }, initialValue);

    acc = [
      ...acc,
      {
        name: obj.name,
        medium: key / obj.subjects.length,
      },
    ];
    console.log("acc: ", acc);

    return acc;
  }, [] as any[]);

  return newArr;
};

export const groupBy = (arr: Array<any>) => {
  const newArr = arr.reduce((score, row) => {
    if (row.medium > 9) {
      console.log("gioi: ", row.name);
    } else if (row.medium >= 8 && row.medium <= 9) {
      console.log("kha: ", row.name);
    } else if (row.medium < 8 && row.medium >= 5) {
      console.log("trung binh: ", row.name);
    } else {
      console.log("yeu: ", row.name);
    }
  }, [] as any[]);
  return newArr;
};

export const totalMedium = (arr: Array<any>) => {
  const sum = arr.reduce((accumulator, currentValue) => {
    console.log("current: ", currentValue);

    return accumulator + currentValue.medium;
  }, 0);
  console.log("sdfjdk: ", sum / arr.length);

  return sum / arr.length;
};

export const findGoodStudent = (arr: any) => {
  let bestStudent = {};
  const newArr = arr.reduce((score: any, row: any) => {
    if (row.medium > 9) {
      console.log("row: ", row);
      bestStudent = row;
      console.log("besttttt: ", bestStudent);
    }
    return bestStudent;
  }, {});
  return newArr;
};
