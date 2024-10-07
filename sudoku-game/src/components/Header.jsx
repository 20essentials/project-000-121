import { useEffect, useRef } from 'react';
import Modal from './Modal';

const rowsIndexes = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80]
];

const columnsIndexes = [
  [0, 9, 18, 27, 36, 45, 54, 63, 72],
  [1, 10, 19, 28, 37, 46, 55, 64, 73],
  [2, 11, 20, 29, 38, 47, 56, 65, 74],
  [3, 12, 21, 30, 39, 48, 57, 66, 75],
  [4, 13, 22, 31, 40, 49, 58, 67, 76],
  [5, 14, 23, 32, 41, 50, 59, 68, 77],
  [6, 15, 24, 33, 42, 51, 60, 69, 78],
  [7, 16, 25, 34, 43, 52, 61, 70, 79],
  [8, 17, 26, 35, 44, 53, 62, 71, 80]
];

const subGrids3x3Indexes = [
  [0, 1, 2, 9, 10, 11, 18, 19, 20],
  [3, 4, 5, 12, 13, 14, 21, 22, 23],
  [6, 7, 8, 15, 16, 17, 24, 25, 26],
  [27, 28, 29, 36, 37, 38, 45, 46, 47],
  [30, 31, 32, 39, 40, 41, 48, 49, 50],
  [33, 34, 35, 42, 43, 44, 51, 52, 53],
  [54, 55, 56, 63, 64, 65, 72, 73, 74],
  [57, 58, 59, 66, 67, 68, 75, 76, 77],
  [60, 61, 62, 69, 70, 71, 78, 79, 80]
];

const returnRows = (grid, arrayScheme) => {
  const arrayOfArray = [];
  const firsPosition = i => arrayScheme[i].at(0);
  const lastPosition = i => arrayScheme[i].at(-1);

  for (let i = 0; i < 9; i++) {
    const row = grid.slice(firsPosition(i), lastPosition(i) + 1);
    arrayOfArray.push(row);
  }

  return arrayOfArray;
};

const returnCols = (grid, arrayScheme) => {
  const newSuperArray = arrayScheme.map((el, index) => {
    const newArray = el.map(n => grid[n]);
    return newArray;
  });

  return newSuperArray;
};

const checkEndGame = rowsToCheck => {
  return rowsToCheck.every(row =>
    row.every(el => el !== undefined && el !== null)
  );
};

const checkCaracters = rowsToCheck => {
  return rowsToCheck.every(row => row.every(el => /[1-9]{1}/.test(el)));
};

const Header = ({
  modal,
  gridActual,
  changeModal,
  changeIndicesNoValidos,
  userWin,
  setWinner
}) => {
  const refBtnLogo = useRef();

  const upgradeGrid = () => {
    const rows = returnRows(gridActual, rowsIndexes);
    const cols = returnCols(gridActual, columnsIndexes);
    const subGrids3x3 = returnCols(gridActual, subGrids3x3Indexes);
    let endGame = checkEndGame(rows);
    let checkValidCaracters = checkCaracters(rows);
    if (!endGame) {
      changeModal('You had to complete all the inputs');
      return;
    }
    if (!checkValidCaracters) {
      changeModal('You had to complete all the inputs with numbers');
      return;
    }

    if (endGame && checkValidCaracters) {
      if (checkRowAndCols(rows, cols, subGrids3x3)) {
        changeModal('You won');
        userWin();
        setWinner('Win');
        return;
      }

      changeModal('You lost');
    }
  };

  const checkRowAndCols = (rowsToCheck, colsToCheck, subgridTocheck) => {
    const exist = (row = []) => {
      if (row.length === 0) return [];
      const { length } = row;
      for (let i = 0; i < length; i++) {
        const indices = row
          .map((el, index) => (row[i] === el ? index : -1))
          .filter(index => index !== -1);

        if (indices.length >= 2) {
          return indices;
        }
      }
    };

    const repeatedInRows = rowsToCheck.find(row => exist(row));
    const repeatedInCols = colsToCheck.find(row => exist(row));
    const repeatedIn3x3 = subgridTocheck.find(row => exist(row));

    if (repeatedInRows || repeatedInCols || repeatedIn3x3) {
      //Rows
      let indexRow = rowsToCheck.indexOf(repeatedInRows);
      let indicesRow = exist(repeatedInRows);
      let indicesRealesRow = indicesRow.map(el => rowsIndexes[indexRow][el]);

      //Cols
      let indexCols = colsToCheck.indexOf(repeatedInCols);
      let indicesCols = exist(repeatedInCols);
      let indicesRealesCols = indicesCols.map(
        el => columnsIndexes[indexCols][el]
      );

      //Subgrid
      let indexSubGrid = subgridTocheck.indexOf(repeatedIn3x3);
      let indicesSubGrids = exist(repeatedIn3x3);
      let indicesRealesSubgGrids = indicesSubGrids.map(
        el => subGrids3x3Indexes[indexSubGrid][el]
      );

      changeIndicesNoValidos([
        ...indicesRealesRow,
        ...indicesRealesCols,
        ...indicesRealesSubgGrids
      ]);
      return false;
    }

    return true;
  };

  useEffect(() => {
    refBtnLogo.current.classList[modal ? 'add' : 'remove']('verify');

    return () => {
      refBtnLogo.current.classList.remove('verify');
    };
  }, [modal]);

  return (
    <header className='C1-HEADER'>
      <section
        ref={refBtnLogo}
        className='sudoku-logo'
        onClick={() => upgradeGrid()}
      >
        <article>S</article>
        <article>U</article>
        <article></article>
        <article></article>
        <article>D</article>
        <article>O</article>
        <article>K</article>
        <article>U</article>
        <article></article>
      </section>
      <div className='message'>Click to verify ⬆️</div>
    </header>
  );
};

export default Header;
