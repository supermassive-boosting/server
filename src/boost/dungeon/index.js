import Boost from '../index.js';
import Detail from './details.js';

/**
 * Represents a dungeon, extending the functionality of the `Boost` class with additional properties
 * specific to dungeons. This class includes details such as armor type, instance, keystone level,
 * and difficulty, tailored for dungeon-related operations.
 *
 * @class
 * @extends Boost
 * @param {Object} options - The options for initializing the `Dungeon` instance.
 * @param {number} options.id - The unique identifier for the dungeon.
 * @param {string} options.type - The type of the dungeon (e.g., 'dungeon').
 * @param {Object} [options.client] - The client information associated with the dungeon.
 * @param {number} options.pot - The cost or value of the dungeon.
 * @param {string} options.version - The version of the dungeon (e.g., 'retail').
 * @param {number} [options.count=1] - The count of dungeons (default is 1).
 * @param {number} [options.discount=1] - The discount applied to the dungeon (default is 1).
 * @param {string} options.armorType - The type of armor involved in the dungeon (e.g., 'leather').
 * @param {string} options.instance - The instance or location where the dungeon takes place (e.g., 'the-stonevault').
 * @param {number} options.keystoneLevel - The keystone level of the dungeon (e.g., 10).
 * @param {string} options.difficulty - The difficulty level of the dungeon (e.g., 'mythic-plus').
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
   * Creates an instance of the `Dungeon` class.
   *
   * @param {Object} options - The options for initializing the `Dungeon` instance.
   * @param {number} options.id - The unique identifier for the dungeon.
   * @param {string} options.type - The type of the dungeon.
   * @param {Object} [options.client] - The client information associated with the dungeon.
   * @param {number} options.pot - The cost or value of the dungeon.
   * @param {string} options.version - The version of the dungeon.
   * @param {number} [options.count=1] - The count of dungeons.
   * @param {number} [options.discount=1] - The discount applied to the dungeon.
   * @param {string} options.armorType - The type of armor involved in the dungeon.
   * @param {string} options.instance - The instance or location where the dungeon takes place.
   * @param {number} options.keystoneLevel - The level of the keystone.
   * @param {string} options.difficulty - The difficulty of the dungeon.
   */
  constructor(options) {
    super(options);

    /**
     * The type of armor involved in the dungeon.
     * @type {string}
     */
    this.armorType = options.armorType;

    /**
     * The instance or location where the dungeon takes place.
     * @type {string}
     */
    this.instance = options.instance;

    /**
     * The level of the keystone for the dungeon.
     * @type {number}
     */
    this.keystoneLevel = options.keystoneLevel;

    /**
     * The difficulty level of the dungeon.
     * @type {string}
     */
    this.difficulty = options.difficulty;

    /**
     * List of detailed information objects related to the dungeon.
     * @type {Detail[]}
     */
    this.details = [];
  }

  /* 
  ! hesaplama pot hesaplama işlemleri - deduction kontrolü
  ! yapılmış dungeon listesi ve başlama/bitiş süreleri
  */

  /**
   * Adds a new detail to the dungeon's detail list.
   *
   * @param {Object} data - The detail data to add.
   * @param {number} data.id - The unique identifier for the detail.
   * @param {string} data.description - The description of the detail.
   * @example
   * dungeon.addDetail({ id: 1, description: 'First detail description' });
   */
  addDetail(data) {
    this.details.push(new Detail(data));
  }

  /**
   * Converts the `Dungeon` instance to a JSON string representation.
   *
   * @returns {string} The JSON string representation of the `Dungeon` instance.
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
      details: this.details,
      modLog: this.modLog,
      createdAt: this.createdAt,
      startedAt: this.startedAt,
      completedAt: this.completedAt,
    });
  }
}
