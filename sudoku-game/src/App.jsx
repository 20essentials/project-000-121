import Counter from './components/Counter.jsx';
import Header from './components/Header.jsx';
import Sudoku from './components/Sudoku.jsx';
import { useState } from 'react';
import { SUDOKU_TEMPLATES } from './helper/sudoku-template.js';
import './index.css';
import Modal from './components/Modal.jsx';

const App = () => {
  const [grid, setGrid] = useState(() => {
    const random = Math.floor(Math.random() * 9);
    return SUDOKU_TEMPLATES[random];
  });

  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [indicesNovalidos, setIndicesNoValidos] = useState([]);
  const [winner, setWinner] = useState(null);
  const [win, setWin] = useState(localStorage.getItem('wins') || 0);

  const changeGrid = newArray => {
    setGrid(newArray);
  };

  const changeModal = newText => {
    setModal(true);
    setModalText(newText);
  };

  const changeIndicesNoValidos = (array = []) => {
    setIndicesNoValidos(array);
  };

  const userWin = () => {
    if (!localStorage.getItem('wins')) {
      localStorage.setItem('wins', 0);
    }
    let wins = +localStorage.getItem('wins') + 1;
    setWin(wins);
    localStorage.setItem('wins', wins);
  };

  return (
    <>
      <main className='center'>
        <Header
          modal={modal}
          gridActual={grid}
          changeModal={changeModal}
          changeIndicesNoValidos={changeIndicesNoValidos}
          userWin={userWin}
          setWinner={setWinner}
        />
        <Sudoku
          grid={grid}
          changeGrid={changeGrid}
          indicesNovalidos={indicesNovalidos}
        />
        <Counter win={win} />
      </main>
      <Modal
        modal={modal}
        text={modalText}
        changeIndicesNoValidos={changeIndicesNoValidos}
        setModal={setModal}
        winner={winner}
      />
    </>
  );
};

export default App;
