import Boost from './index.js';

/**
 * Represents a raid, extending the functionality of the Boost class with additional properties
 * related to raid specifics such as armor type, instance, difficulty, and leader.
 *
 * @class
 * @extends Boost
 * @param {Object} options - The options for initializing the Raid instance.
 * @param {string} options.id - The unique identifier for the raid.
 * @param {string} options.type - The type of the raid.
 * @param {Object} [options.client] - The client information associated with the raid.
 * @param {number} options.pot - The cost or value of the raid.
 * @param {string} options.version - The version of the raid.
 * @param {number} [options.count=1] - The count of items or raids.
 * @param {number} [options.discount=1] - The discount applied to the raid.
 * @param {string} options.armorType - The type of armor involved in the raid.
 * @param {string} options.instance - The instance or location where the raid takes place.
 * @param {string} options.difficulty - The difficulty of the raid.
 * @param {Object} options.leader - The leader of the raid.
 * @example
 * const raid = new Raid({
 *   id: 1234,
 *   type: 'raid',
 *   client: { id: 1234, name: 'Jane-Silvermoon' },
 *   pot: 4000000,
 *   version: 'retail',
 *   count: 1,
 *   discount: 0.05,
 *   armorType: 'plate',
 *   instance: 'nerubar-place',
 *   difficulty: 'mythic',
 *   leader: { id: 1234, name: 'Alex-Silvermoon' }
 * });
 */
export default class Raid extends Boost {
  /**
   * Creates an instance of Raid.
   *
   * @param {Object} options - The options for initializing the Raid instance.
   * @param {number} options.id - The unique identifier for the raid.
   * @param {string} options.type - The type of the raid.
   * @param {Object} [options.client] - The client information associated with the raid.
   * @param {number} options.pot - The cost or value of the raid.
   * @param {string} options.version - The version of the raid.
   * @param {number} [options.count=1] - The count of items or raids.
   * @param {number} [options.discount=1] - The discount applied to the raid.
   * @param {string} options.armorType - The type of armor involved in the raid.
   * @param {string} options.instance - The instance or location where the raid takes place.
   * @param {string} options.difficulty - The difficulty of the raid.
   * @param {Object} options.leader - The leader of the raid.
   */
  constructor(options) {
    super(options);
    this.armorType = options.armorType;
    this.instance = options.instance;
    this.difficulty = options.difficulty;
    this.leader = options.leader;
  }

  /* 
  ! hesaplama pot hesaplama işlemleri - deduction kontrolü
  ! boost başlama ve bitiş süreleri
  */

  /**
   * Adds a client to the raid.
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
   * Converts the Raid instance to a JSON string.
   *
   * @returns {string} The JSON string representation of the Raid instance.
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
    });
  }
}
