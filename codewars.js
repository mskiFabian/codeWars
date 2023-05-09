class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(vector2) {
    let addX = this.x + vector2.x
    let addY = this.y + vector2.y
    return new Vec(addX, addY)
  }
  minus() {
    let minusX = this.x - vector2.x
    let minusY = this.y - vector2.y
    return new Vec(minusX, minusY)
  }
  get length() {

  }
}