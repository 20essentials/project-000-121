import { useState } from 'react';

const Square = ({ index, valor, grid, changeGrid, indicesNovalidos }) => {
  const [inputValue, setInputValue] = useState(valor);

  const upgradeGrid = (e, index) => {
    const newGrid = [...grid];
    const newValue = +e.target.value;
    newGrid[index] = newValue;
    changeGrid(newGrid);
    setInputValue(newValue);
  };

  let className = indicesNovalidos.includes(index) ? 'invalido' : ' ';

  return (
    <input
      type='text'
      name={`n${index}`}
      maxLength='1'
      autoComplete='off'
      pattern='^[1-9]{1}$'
      required
      className={className}
      defaultValue={inputValue}
      onChange={e => upgradeGrid(e, index)}
    />
  );
};

export default Square;
