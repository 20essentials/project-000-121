import { useRef, useEffect, useState } from 'react';

const Modal = ({ modal, text, setModal, changeIndicesNoValidos, winner }) => {
  const refDialog = useRef();
  const [display, setDisplay] = useState('flex');

  useEffect(() => {
    modal ? refDialog.current.showModal() : refDialog.current.close();
  }, [modal]);

  useEffect(() => {
    if (winner) {
      setDisplay('none');
    }
  }, [winner]);

  const closeModal = () => {
    refDialog.current.close();
    setModal(false);
    changeIndicesNoValidos([]);
  };

  return (
    <dialog ref={refDialog}>
      <span
        style={{
          display: `${display}`
        }}
        className='close'
        onClick={() => closeModal()}
      >
        ✖️
      </span>
      <div className='container'>{text}</div>
      <button onClick={() => location.reload()}>Reset Sudoku</button>
    </dialog>
  );
};

export default Modal;
