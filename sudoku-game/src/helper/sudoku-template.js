
const sudokuTemplate1 = [
  5, undefined, undefined,   undefined, 1, undefined,   undefined, undefined, 4,
  undefined, undefined, 6,   undefined, undefined, undefined,   7, 2, undefined,
  undefined, undefined, undefined,   undefined, 3, undefined,   undefined, undefined, 1,

  undefined, 4, undefined,   undefined, undefined, 5,   undefined, undefined, undefined,
  8, undefined, undefined,   undefined, undefined, undefined,   undefined, undefined, 3,
  undefined, undefined, 7,   undefined, undefined, undefined,   undefined, 5, undefined,

  6, undefined, undefined,   undefined, 2, undefined,   1, undefined, 9,
  undefined, undefined, undefined,   6, undefined, undefined,   undefined, 8, undefined,
  undefined, 7, undefined,   5, undefined, undefined,   undefined, undefined, 4,
];

const sudokuTemplate2 = [
  undefined, 3, undefined,   5, undefined, undefined,   7, 1, undefined,
  undefined, undefined, 2,   undefined, undefined, undefined,   6, undefined, 9,
  4, undefined, undefined,   undefined, 1, 8,   undefined, undefined, undefined,

  undefined, 7, undefined,   undefined, 6, undefined,   undefined, undefined, 3,
  undefined, 8, 5,   undefined, undefined, 4,   1, undefined, undefined,
  undefined, undefined, undefined,   2, undefined, undefined,   undefined, 9, undefined,

  undefined, 9, undefined,   4, undefined, undefined,   3, undefined, undefined,
  undefined, 6, 1,   undefined, undefined, undefined,   5, undefined, undefined,
  2, undefined, undefined,   undefined, 7, 5,   undefined, undefined, 1,
];

const sudokuTemplate3 = [
  undefined, 5, undefined,   undefined, 9, undefined,   undefined, undefined, 3,
  4, undefined, undefined,   8, 1, undefined,   undefined, undefined, 6,
  undefined, undefined, 1,   undefined, 6, undefined,   undefined, 5, 7,

  undefined, undefined, 7,   3, undefined, undefined,   undefined, 8, undefined,
  1, undefined, undefined,   undefined, undefined, 4,   undefined, undefined, undefined,
  undefined, 6, 4,   undefined, undefined, 5,   undefined, undefined, undefined,

  6, undefined, 3,   undefined, undefined, undefined,   undefined, undefined, undefined,
  undefined, 1, undefined,   5, undefined, undefined,   7, undefined, 4,
  undefined, undefined, 2,   undefined, undefined, undefined,   undefined, 9, 1,
];

const sudokuTemplate4 = [
  undefined, undefined, 2,   undefined, undefined, 6,   1, undefined, undefined,
  5, 1, undefined,   undefined, undefined, undefined,   7, undefined, undefined,
  undefined, 7, undefined,   4, 5, undefined,   3, undefined, undefined,

  1, undefined, 3,   undefined, 7, undefined,   undefined, 6, 9,
  undefined, undefined, 4,   undefined, undefined, undefined,   undefined, 8, undefined,
  undefined, undefined, undefined,   2, 3, undefined,   undefined, undefined, 5,

  3, undefined, undefined,   undefined, 8, 1,   undefined, undefined, undefined,
  undefined, 6, undefined,   undefined, undefined, undefined,   undefined, 4, undefined,
  undefined, undefined, 8,   undefined, 9, 5,   undefined, undefined, undefined,
];

const sudokuTemplate5 = [
  undefined, undefined, 3,   5, undefined, undefined,   8, undefined, undefined,
  7, undefined, undefined,   undefined, 4, undefined,   undefined, 6, undefined,
  undefined, 4, undefined,   1, undefined, 6,   undefined, 3, undefined,

  6, undefined, undefined,   undefined, 9, undefined,   4, undefined, 1,
  undefined, undefined, 1,   7, undefined, undefined,   undefined, undefined, 5,
  3, undefined, 5,   undefined, undefined, undefined,   undefined, 2, undefined,

  undefined, 2, undefined,   undefined, undefined, undefined,   undefined, 7, undefined,
  undefined, undefined, undefined,   6, undefined, 1,   undefined, undefined, undefined,
  undefined, undefined, 6,   undefined, undefined, 5,   undefined, undefined, 4,
];

const sudokuTemplate6 = [
  undefined, undefined, 1,   undefined, undefined, undefined,   5, undefined, 2,
  undefined, undefined, 4,   undefined, undefined, 3,   9, undefined, 7,
  undefined, 9, undefined,   8, 1, undefined,   6, undefined, undefined,

  undefined, undefined, 5,   1, 7, undefined,   undefined, undefined, undefined,
  3, 6, undefined,   undefined, undefined, undefined,   1, undefined, 4,
  7, undefined, undefined,   undefined, 2, undefined,   undefined, 3, undefined,

  4, undefined, undefined,   undefined, undefined, undefined,   undefined, 8, undefined,
  1, undefined, undefined,   undefined, undefined, 7,   undefined, 4, undefined,
  2, 7, undefined,   9, undefined, undefined,   undefined, undefined, undefined,
];

const sudokuTemplate7 = [
  undefined, 1, undefined,   5, undefined, 8,   undefined, undefined, 3,
  2, 3, undefined,   undefined, 4, undefined,   undefined, undefined, undefined,
  undefined, undefined, undefined,   undefined, undefined, undefined,   undefined, 5, undefined,

  undefined, undefined, 7,   undefined, undefined, 5,   undefined, undefined, 9,
  undefined, undefined, undefined,   6, undefined, 4,   undefined, 2, undefined,
  4, undefined, undefined,   undefined, 1, 3,   undefined, undefined, undefined,

  6, undefined, undefined,   undefined, 9, undefined,   undefined, undefined, 1,
  undefined, undefined, 9,   undefined, undefined, undefined,   undefined, undefined, 8,
  undefined, undefined, 5,   undefined, 7, undefined,   undefined, 4, undefined,
];

const sudokuTemplate8 = [
  undefined, 6, undefined,   undefined, 1, undefined,   8, undefined, undefined,
  undefined, 5, 2,   undefined, undefined, undefined,   undefined, undefined, 3,
  undefined, undefined, undefined,   7, undefined, 6,   undefined, 9, undefined,

  undefined, undefined, 4,   undefined, undefined, undefined,   3, undefined, undefined,
  2, undefined, undefined,   undefined, undefined, 1,   undefined, undefined, undefined,
  7, undefined, undefined,   undefined, 4, undefined,   undefined, 6, undefined,

  1, undefined, undefined,   undefined, 3, undefined,   undefined, 7, undefined,
  undefined, undefined, 3,   undefined, undefined, 8,   undefined, undefined, 4,
  undefined, undefined, undefined,   undefined, 2, 5,   undefined, 8, undefined,
];

const sudokuTemplate9 = [
  undefined, undefined, 5,   undefined, 8, undefined,   2, undefined, undefined,
  undefined, 3, undefined,   undefined, 1, 4,   undefined, 5, undefined,
  4, undefined, 2,   undefined, undefined, 6,   undefined, 7, 3,

  1, 4, undefined,   undefined, undefined, undefined,   undefined, undefined, 6,
  undefined, undefined, undefined,   undefined, 5, undefined,   undefined, undefined, 2,
  undefined, undefined, 6,   undefined, 4, undefined,   1, 3, undefined,

  undefined, 1, undefined,   5, undefined, 8,   undefined, undefined, 4,
  undefined, 5, undefined,   undefined, 3, undefined,   undefined, 6, undefined,
  undefined, undefined, 3,   2, undefined, undefined,   4, undefined, undefined,
];

const sudokuTemplate10 = [
  undefined, undefined, undefined,   6, 1, undefined,   undefined, 2, 3,
  undefined, 3, undefined,   undefined, undefined, 2,   undefined, undefined, 5,
  5, undefined, undefined,   undefined, undefined, undefined,   undefined, undefined, undefined,

  4, undefined, undefined,   undefined, undefined, 5,   undefined, 8, 1,
  undefined, undefined, 6,   5, undefined, undefined,   2, undefined, undefined,
  undefined, undefined, undefined,   4, 3, undefined,   undefined, undefined, undefined,

  undefined, undefined, 3,   undefined, 4, undefined,   undefined, undefined, 9,
  1, undefined, undefined,   9, undefined, undefined,   undefined, 7, undefined,
  undefined, undefined, 5,   undefined, undefined, 1,   3, 4, undefined,
];

const sudokuTemplate11 = [
  undefined, 5, undefined,   undefined, undefined, 6,   3, undefined, undefined,
  1, undefined, undefined,   undefined, undefined, 4,   undefined, undefined, 5,
  undefined, 3, undefined,   7, undefined, undefined,   6, 9, undefined,

  undefined, undefined, undefined,   undefined, 8, undefined,   undefined, undefined, 1,
  6, undefined, undefined,   undefined, undefined, 3,   undefined, undefined, undefined,
  7, undefined, 8,   undefined, 5, undefined,   undefined, undefined, undefined,

  undefined, 4, undefined,   2, undefined, undefined,   undefined, undefined, undefined,
  undefined, undefined, 7,   undefined, 6, undefined,   undefined, 5, 8,
  undefined, 1, 9,   undefined, undefined, undefined,   undefined, undefined, 4,
];

const sudokuTemplate12 = [
  undefined, undefined, undefined,   8, 5, undefined,   1, 4, undefined,
  undefined, undefined, undefined,   undefined, 3, undefined,   undefined, undefined, 2,
  undefined, 4, undefined,   undefined, undefined, undefined,   undefined, 5, undefined,

  5, undefined, undefined,   undefined, undefined, undefined,   undefined, 6, undefined,
  undefined, undefined, 6,   1, undefined, undefined,   undefined, undefined, undefined,
  undefined, undefined, undefined,   undefined, undefined, undefined,   3, 2, undefined,

  4, 3, undefined,   undefined, undefined, 5,   undefined, undefined, 7,
  undefined, undefined, 2,   undefined, 1, undefined,   undefined, 4, undefined,
  undefined, 8, undefined,   undefined, undefined, 9,   undefined, 1, undefined,
];

const sudokuTemplate13 = [
  1, undefined, 2,   undefined, undefined, undefined,   undefined, 3, undefined,
  undefined, undefined, undefined,   6, 4, undefined,   undefined, 5, undefined,
  undefined, 4, undefined,   undefined, undefined, undefined,   undefined, undefined, 8,

  undefined, 5, 3,   undefined, 7, undefined,   undefined, undefined, 4,
  4, undefined, undefined,   2, undefined, undefined,   undefined, 6, undefined,
  undefined, undefined, undefined,   8, undefined, undefined,   undefined, undefined, undefined,

  undefined, undefined, undefined,   5, undefined, 8,   3, undefined, 2,
  undefined, 7, undefined,   undefined, 9, undefined,   undefined, undefined, undefined,
  undefined, undefined, 8,   undefined, undefined, 5,   1, undefined, 4,
];

const sudokuTemplate14 = [
  2, undefined, undefined,   undefined, 5, undefined,   undefined, 8, 9,
  undefined, 8, undefined,   3, undefined, undefined,   undefined, 6, undefined,
  undefined, undefined, 5,   1, undefined, undefined,   undefined, undefined, undefined,

  undefined, undefined, undefined,   undefined, undefined, 2,   4, undefined, 8,
  6, 4, undefined,   undefined, 9, undefined,   undefined, undefined, 7,
  undefined, undefined, 7,   undefined, undefined, undefined,   undefined, undefined, 1,

  undefined, undefined, 1,   7, 6, undefined,   undefined, undefined, undefined,
  undefined, 9, undefined,   4, undefined, 3,   6, undefined, undefined,
  undefined, 3, undefined,   undefined, undefined, undefined,   5, 2, undefined,
];

const sudokuTemplate15 = [
  undefined, undefined, undefined,   undefined, 2, 3,   undefined, 6, undefined,
  4, undefined, undefined,   undefined, undefined, undefined,   1, undefined, 5,
  undefined, 8, 1,   4, undefined, undefined,   undefined, 9, undefined,

  undefined, 4, 5,   2, undefined, 7,   undefined, 1, undefined,
  9, undefined, undefined,   undefined, 5, undefined,   undefined, 7, undefined,
  undefined, undefined, 6,   1, undefined, undefined,   undefined, undefined, undefined,

  undefined, 1, undefined,   8, undefined, 6,   undefined, undefined, 4,
  undefined, undefined, 3,   undefined, undefined, undefined,   undefined, undefined, undefined,
  3, 2, undefined,   undefined, undefined, undefined,   undefined, undefined, undefined,
];

const sudokuTemplate16 = [
  undefined, 1, 4,   undefined, undefined, undefined,   undefined, 5, undefined,
  undefined, undefined, 5,   2, undefined, undefined,   3, 9, undefined,
  undefined, 3, undefined,   undefined, undefined, undefined,   undefined, 6, undefined,

  undefined, undefined, undefined,   undefined, 7, undefined,   undefined, 2, undefined,
  undefined, undefined, undefined,   5, undefined, 8,   undefined, undefined, undefined,
  undefined, 4, undefined,   undefined, undefined, undefined,   1, 3, undefined,

  undefined, undefined, undefined,   undefined, 8, undefined,   undefined, 4, undefined,
  undefined, 6, 7,   undefined, undefined, 1,   undefined, undefined, 9,
  5, undefined, undefined,   6, undefined, 3,   undefined, undefined, undefined,
];

const sudokuTemplate17 = [
  undefined, undefined, 7,   undefined, undefined, 8,   undefined, undefined, 3,
  undefined, undefined, undefined,   9, undefined, 5,   undefined, 1, undefined,
  8, undefined, undefined,   undefined, 4, undefined,   undefined, undefined, 7,

  undefined, undefined, 4,   undefined, undefined, 2,   undefined, undefined, undefined,
  6, undefined, 2,   5, undefined, undefined,   undefined, 8, 1,
  undefined, undefined, undefined,   undefined, 3, undefined,   2, undefined, undefined,

  undefined, 8, 1,   undefined, undefined, undefined,   5, undefined, undefined,
  undefined, 7, undefined,   1, undefined, undefined,   undefined, 6, undefined,
  9, undefined, undefined,   8, undefined, 4,   3, undefined, undefined,
];

const sudokuTemplate18 = [
  undefined, undefined, undefined,   1, 5, undefined,   6, undefined, undefined,
  undefined, undefined, undefined,   undefined, undefined, 4,   undefined, 3, undefined,
  5, 9, undefined,   undefined, 2, undefined,   undefined, undefined, 8,

  4, 6, undefined,   5, undefined, 9,   undefined, undefined, undefined,
  undefined, undefined, undefined,   8, undefined, undefined,   9, 4, 1,
  undefined, undefined, 2,   undefined, undefined, undefined,   undefined, undefined, undefined,

  undefined, 5, undefined,   undefined, undefined, 2,   1, undefined, undefined,
  3, undefined, undefined,   undefined, undefined, undefined,   8, 9, 4,
  undefined, undefined, 8,   undefined, 6, undefined,   undefined, undefined, undefined,
];

const sudokuTemplate19 = [
  undefined, undefined, 8,   undefined, undefined, undefined,   1, undefined, 9,
  undefined, undefined, 2,   undefined, undefined, 5,   undefined, 4, undefined,
  undefined, undefined, 5,   undefined, 4, undefined,   undefined, 3, undefined,

  undefined, 6, undefined,   undefined, undefined, 3,   9, 8, undefined,
  undefined, 1, undefined,   undefined, 2, 8,   undefined, undefined, undefined,
  4, 5, undefined,   undefined, 9, undefined,   undefined, 1, undefined,

  undefined, undefined, undefined,   7, undefined, 6,   undefined, undefined, 4,
  undefined, 2, undefined,   undefined, undefined, undefined,   8, undefined, undefined,
  undefined, 3, undefined,   undefined, 1, 5,   undefined, undefined, undefined,
];

const sudokuTemplate20 = [
  undefined, undefined, 6,   3, undefined, undefined,   5, undefined, 1,
  undefined, 1, 4,   undefined, 8, undefined,   undefined, undefined, 7,
  undefined, 9, undefined,   undefined, undefined, undefined,   undefined, 8, 4,

  2, undefined, undefined,   1, undefined, 9,   8, undefined, 6,
  undefined, undefined, 4,   7, undefined, 5,   undefined, 2, undefined,
  undefined, undefined, 3,   undefined, 6, undefined,   4, 1, 5,

  undefined, undefined, 8,   undefined, undefined, 3,   1, 7, undefined,
  5, undefined, 7,   undefined, undefined, 6,   undefined, undefined, undefined,
  undefined, 4, 9,   undefined, 2, undefined,   undefined, 3, undefined,
];

export const SUDOKU_TEMPLATES = [
  sudokuTemplate1, sudokuTemplate2, sudokuTemplate3, sudokuTemplate4,
  sudokuTemplate5, sudokuTemplate6, sudokuTemplate7, sudokuTemplate8,
  sudokuTemplate9, sudokuTemplate10, sudokuTemplate11, sudokuTemplate12,
  sudokuTemplate13, sudokuTemplate14, sudokuTemplate15, sudokuTemplate16,
  sudokuTemplate17, sudokuTemplate18, sudokuTemplate19, sudokuTemplate20,
];


