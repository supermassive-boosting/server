import Boost from './index.js';

/**
 * Represents a dungeon, extending the functionality of the Boost class with additional properties
 * specific to dungeons, such as armor type, instance, keystone level, and difficulty.
 *
 * @class
 * @extends Boost
 * @param {Object} options - The options for initializing the Dungeon instance.
 * @param {number} options.id - The unique identifier for the dungeon.
 * @param {string} options.type - The type of the dungeon.
 * @param {Object} [options.client] - The client information associated with the dungeon.
 * @param {number} options.pot - The cost or value of the dungeon.
 * @param {string} options.version - The version of the dungeon.
 * @param {number} [options.count=1] - The count of dungeons (default 1)
 * @param {number} [options.discount=1] - The discount applied to the dungeon (default 1).
 * @param {string} options.armorType - The type of armor involved in the dungeon.
 * @param {string} options.instance - The instance or location where the dungeon takes place.
 * @param {string} options.keystoneLevel - The keystone level of the dungeon.
 * @param {string} options.difficulty - The difficulty of the dungeon.
 * @example
 * const dungeon = new Dungeon({
 *   id: 1234,
 *   type: 'dungeon',
 *   client: { id: 1234, name: 'Jane-Silvermoon' },
 *   pot: 800000,
 *   version: 'retail',
 *   armorType: 'leather',
 *   instance: 'the-stonevault',
 *   keystoneLevel: 10,
 *   difficulty: 'mythic-plus',
 * });
 */
export default class Dungeon extends Boost {
  /**
   * Creates an instance of Dungeon.
   *
   * @param {Object} options - The options for initializing the Dungeon instance.
   * @param {number} options.id - The unique identifier for the dungeon.
   * @param {string} options.type - The type of the dungeon.
   * @param {Object} [options.client] - The client information associated with the dungeon.
   * @param {number} options.pot - The cost or value of the dungeon.
   * @param {string} options.version - The version of the dungeon.
   * @param {number} [options.count=1] - The count of items or dungeons.
   * @param {number} [options.discount=1] - The discount applied to the dungeon.
   * @param {string} options.armorType - The type of armor involved in the dungeon.
   * @param {string} options.instance - The instance or location where the dungeon takes place.
   * @param {number} options.keystoneLevel - The level of the keystone.
   * @param {string} options.difficulty - The difficulty of the dungeon.
   */
  constructor(options) {
    super(options);
    this.armorType = options.armorType;
    this.instance = options.instance;
    this.keystoneLevel = options.keystoneLevel;
    this.difficulty = options.difficulty;
  }

  /* 
  ! hesaplama pot hesaplama işlemleri - deduction kontrolü
  ! boost başlama ve bitiş süreleri
  ! yapılmış dungeon listesi ve başlama/bitiş süreleri
  */

  /**
   * Converts the Dungeon instance to a JSON string.
   *
   * @returns {string} The JSON string representation of the Dungeon instance.
   * @example
   * const jsonString = dungeon.toJSON();
   */
  toJSON() {
    return JSON.stringify({
      id: this.id,
      type: this.type,
      client: this.client,
      pot: this.pot,
      options: this.options,
      roster: this.roster,
      ticket: this.ticket,
      armorType: this.armorType,
      instance: this.instance,
      keystoneLevel: this.keystoneLevel,
      difficulty: this.difficulty,
    });
  }
}
