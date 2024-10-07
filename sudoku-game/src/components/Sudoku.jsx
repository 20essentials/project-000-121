import Square from './Square.jsx';

const Sudoku = ({ grid, changeGrid, indicesNovalidos }) => {
  return (
    <section className='C2-SUDOKU'>
      {grid.map((el, index) => {
        return (
          <Square
            key={index}
            index={index}
            valor={el}
            grid={grid}
            changeGrid={changeGrid}
            indicesNovalidos={indicesNovalidos}
          />
        );
      })}
    </section>
  );
};

export default Sudoku;
