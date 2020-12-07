/**
 * 判断对象内是否为空
 */
export const isEmptyObject = (obj: Object) => {
  return Object.keys(obj).length === 0 ? true : false;
};

/**
 * 一元数组转换二元数组

 * @param arr
 * @param row
 * @return dyadicArray
 * @example convertDyadicArray([2,3,4,5,6,7], 3) => [[2,3],[4,5],[6,7]]
 */
export const convertDyadicArray = (arr: string[], row: number) => {
  let dyadicArray = [];
  const col = arr.length / row;
  for (let i = 0; i < row; i++) {
    dyadicArray.push(arr.slice(i * col, (i + 1) * col));
  }
  return dyadicArray;
};

export const fomartString = (str: string | undefined): string => {
  return str ? str : "";
};

export const fomartStringToBool = (str: string | undefined): boolean => {
  return !!str && str.toLowerCase() === "true";
};

export const fomartStringToNumber = (str: string | undefined): number => {
  return str ? Number(str) : 0;
};
