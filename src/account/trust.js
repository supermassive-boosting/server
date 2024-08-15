export default class Trust {
  #point;
  constructor(point = 50) {
    this.#point = point;
  }

  get point() {
    return this.#point;
  }

  increase() {
    this.#point += 1;
  }

  decrease() {
    this.#point -= 1;
  }

  punishment() {
    this.#point -= 5;
  }
}
