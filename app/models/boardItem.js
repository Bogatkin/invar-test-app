import { Record } from 'immutable';

const BoardItem = new Record({
  id: null,
  type: 'box',
  color: '#000',
  top: 0,
  left: 0,
});


// Функция со stackoverflow.
// TODO: покрыть тестом
BoardItem.getRandomColor = function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  [...Array(6)].forEach(() => {
    color += letters[Math.floor(Math.random() * 16)];
  });

  return color;
};

export default BoardItem;
