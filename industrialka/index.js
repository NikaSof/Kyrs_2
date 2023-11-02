function createPoint(x, y) {
  let pointX = x;
  let pointY = y;

  function getX() {
    return pointX;
  }

  function getY() {
    return pointY;
  }

  function translate(dx, dy) {
    pointX += dx;
    pointY += dy;
  }

  function scale(k) {
    pointX *= k;
    pointY *= k;
  }

  return {
    getX,
    getY,
    translate,
    scale
  };
}

// Пример использования
const point = createPoint(2, 3);
console.log(point.getX()); // Выводит: 2
console.log(point.getY()); // Выводит: 3

point.translate(1, 2);
console.log(point.getX()); // Выводит: 3
console.log(point.getY()); // Выводит: 5

point.scale(2);
console.log(point.getX()); // Выводит: 6
console.log(point.getY()); // Выводит: 10