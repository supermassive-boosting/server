/**
 * Represents a financial transaction between a sender and a receiver.
 * @class
 */
export default class Transaction {
  #id;
  #sender;
  #receiver;
  #amount;
  /**
   * Creates an instance of the Transaction class.
   * @param {Object} options - The transaction details.
   * @param {string} options.id - The unique identifier for the transaction.
   * @param {string} options.sender - The sender of the transaction.
   * @param {string} options.receiver - The receiver of the transaction.
   * @param {number} options.amount - The amount of money involved in the transaction.
   */
  constructor({ id, sender, receiver, amount }) {
    /**
     * @private
     * @type {string}
     */
    this.#id = id;

    /**
     * @private
     * @type {string}
     */
    this.#sender = sender;

    /**
     * @private
     * @type {string}
     */
    this.#receiver = receiver;

    /**
     * @private
     * @type {number}
     */
    this.#amount = amount;
  }

  /**
   * Gets the unique identifier of the transaction.
   * @returns {string} The unique identifier for the transaction.
   */
  get id() {
    return this.#id;
  }

  /**
   * Gets the sender of the transaction.
   * @returns {string} The sender of the transaction.
   */
  get sender() {
    return this.#sender;
  }

  /**
   * Gets the receiver of the transaction.
   * @returns {string} The receiver of the transaction.
   */
  get receiver() {
    return this.#receiver;
  }

  /**
   * Gets the amount of money involved in the transaction.
   * @returns {number} The amount of money in the transaction.
   */
  get amount() {
    return this.#amount;
  }

  /**
   * Converts the transaction instance to a plain object.
   * @returns {Object} An object representation of the transaction.
   * @property {string} id - The unique identifier of the transaction.
   * @property {string} sender - The sender of the transaction.
   * @property {string} receiver - The receiver of the transaction.
   * @property {number} amount - The amount of money in the transaction.
   */
  toJSON() {
    return {
      id: this.#id,
      sender: this.#sender,
      receiver: this.#receiver,
      amount: this.#amount,
    };
  }
}
