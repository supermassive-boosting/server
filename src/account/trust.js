/**
 * Represents a trust level with a point system.
 * @class
 */
export default class Trust {
  #point;
  /**
   * Creates an instance of the Trust class with an optional initial point value.
   * @param {number} [point=50] - The initial point value for the trust level. Defaults to 50.
   */
  constructor(point = 50) {
    /**
     * @private
     * @type {number}
     */
    this.#point = point;
  }

  /**
   * Gets the current point value of the trust level.
   * @returns {number} The current point value.
   */
  get point() {
    return this.#point;
  }

  /**
   * Increases the point value by 1.
   * @returns {void}
   */
  increase() {
    this.#point += 1;
  }

  /**
   * Decreases the point value by 1.
   * @returns {void}
   */
  decrease() {
    this.#point -= 1;
  }

  /**
   * Applies a punishment by decreasing the point value by 5.
   * @returns {void}
   */
  punishment() {
    this.#point -= 5;
  }
}
