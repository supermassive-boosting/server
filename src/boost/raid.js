import Boost from './index.js';

/**
 * Represents a raid, extending the functionality of the `Boost` class with additional properties
 * specific to raid contexts. This includes details such as armor type, instance, difficulty, and leader.
 *
 * @class
 * @extends Boost
 * @param {Object} options - The options for initializing the `Raid` instance.
 * @param {string} options.id - The unique identifier for the raid.
 * @param {string} options.type - The type of the raid (e.g., 'raid').
 * @param {Object} [options.client] - The client information associated with the raid.
 * @param {number} options.pot - The cost or value of the raid.
 * @param {string} options.version - The version of the raid (e.g., 'retail').
 * @param {number} [options.count=1] - The count of raids or items (default is 1).
 * @param {number} [options.discount=1] - The discount applied to the raid (default is 1).
 * @param {string} options.armorType - The type of armor involved in the raid (e.g., 'plate').
 * @param {string} options.instance - The instance or location where the raid takes place (e.g., 'nerubar-place').
 * @param {string} options.difficulty - The difficulty level of the raid (e.g., 'mythic').
 * @param {Object} options.leader - The leader of the raid.
 * @param {number} options.leader.id - The unique identifier of the raid leader.
 * @param {string} options.leader.name - The name of the raid leader.
 * @example
 * const raid = new Raid({
 *   id: '1234',
 *   type: 'raid',
 *   client: { id: '5678', name: 'Jane-Silvermoon' },
 *   pot: 4000000,
 *   version: 'retail',
 *   count: 1,
 *   discount: 0.05,
 *   armorType: 'plate',
 *   instance: 'nerubar-place',
 *   difficulty: 'mythic',
 *   leader: { id: '91011', name: 'Alex-Silvermoon' }
 * });
 */
export default class Raid extends Boost {
  /**
   * Creates an instance of the `Raid` class.
   *
   * @param {Object} options - The options for initializing the `Raid` instance.
   * @param {string} options.id - The unique identifier for the raid.
   * @param {string} options.type - The type of the raid.
   * @param {Object} [options.client] - The client information associated with the raid.
   * @param {number} options.pot - The cost or value of the raid.
   * @param {string} options.version - The version of the raid.
   * @param {number} [options.count=1] - The count of raids or items.
   * @param {number} [options.discount=1] - The discount applied to the raid.
   * @param {string} options.armorType - The type of armor involved in the raid.
   * @param {string} options.instance - The instance or location where the raid takes place.
   * @param {string} options.difficulty - The difficulty of the raid.
   * @param {Object} options.leader - The leader of the raid.
   * @param {number} options.leader.id - The unique identifier of the raid leader.
   * @param {string} options.leader.name - The name of the raid leader.
   */
  constructor(options) {
    super(options);

    /**
     * The type of armor involved in the raid.
     * @type {string}
     */
    this.armorType = options.armorType;

    /**
     * The instance or location where the raid takes place.
     * @type {string}
     */
    this.instance = options.instance;

    /**
     * The difficulty level of the raid.
     * @type {string}
     */
    this.difficulty = options.difficulty;

    /**
     * The leader of the raid.
     * @type {Object}
     * @property {number} id - The unique identifier of the raid leader.
     * @property {string} name - The name of the raid leader.
     */
    this.leader = options.leader;
  }

  /* 
  ! hesaplama pot hesaplama işlemleri - deduction kontrolü
  */

  /**
   * Adds a client to the raid's client list.
   *
   * @param {Object} client - The client to add.
   * @param {number} client.id - The unique identifier of the client.
   * @param {string} client.name - The name of the client.
   * @example
   * raid.addClient({ id: 1234, name: 'Sarah-Silvermoon' });
   */
  addClient(client) {
    this.client.push(client);
  }

  /**
   * Converts the `Raid` instance to a JSON string representation.
   *
   * @returns {string} The JSON string representation of the `Raid` instance.
   * @example
   * const jsonString = raid.toJSON();
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
      difficulty: this.difficulty,
      leader: this.leader,
      modLog: this.modLog,
      createdAt: this.createdAt,
      startedAt: this.startedAt,
      completedAt: this.completedAt,
    });
  }
}
