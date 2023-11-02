class Point {
  constructor(x, y) {
    this.pointX = x;
    this.pointY = y;
  }

  getX() {
    return this.pointX;
  }

  getY() {
    return this.pointY;
  }

  translate(dx, dy) {
    this.pointX += dx;
    this.pointY += dy;
  }

  scale(k) {
    this.pointX *= k;
    this.pointY *= k;
  }
}

// Пример использования
const point = new Point(2, 3);
console.log(point.getX()); // Выводит: 2
console.log(point.getY()); // Выводит: 3

point.translate(1, 2);
console.log(point.getX()); // Выводит: 3
console.log(point.getY()); // Выводит: 5

point.scale(2);
console.log(point.getX()); // Выводит: 6
console.log(point.getY()); // Выводит: 10