/**
 * Represents a customer's boost, including details such as client information,
 * instance IDs, cost, discount, and selected boosters.
 *
 * @class
 * @example
 * const boost = new Boost({
 *   id: 1234,
 *   type: 'mythic-plus',
 *   client: { id: 1234, name: 'John-Silvermoon' },
 *   pot: 100,
 *   version: 'retail',
 *   count: 2,
 *   discount: 0.1
 * });
 */
export default class Boost {
  /**
   * Creates an instance of Boost.
   *
   * @param {Object} options - The options for initializing the Boost instance.
   * @param {number} options.id - The unique identifier for the boost.
   * @param {string} options.type - The type of the boost (e.g., 'raid', 'mythic-plus').
   * @param {Object} [options.client] - The client information associated with the boost.
   * @param {number} options.pot - The cost or value of the boost.
   * @param {string} [options.version='retail'] - The version of the boost (default 'retail').
   * @param {number} [options.count=1] - The count of boosts (default 1).
   * @param {number} [options.discount=1] - The discount applied to the boost (default 1).
   */
  constructor(options) {
    /**
     * Unique identifier for the boost.
     * @type {number}
     */
    this.id = options.id;

    /**
     * The type of the boost.
     * @type {string}
     */
    this.type = options.type;

    /**
     * An array containing client information associated with the boost.
     * @type {Object[]}
     */
    this.client = options.client ? [options.client] : [];

    /**
     * The total cost of the boost.
     * @type {number}
     */
    this.pot = options.pot;

    /**
     * Options related to the boost instance.
     * @type {Object}
     * @property {string} version - The version of the boost.
     * @property {number} count - The count of boosts.
     * @property {number} [discount=1] - The discount applied to the boost (default is 1).
     */
    this.options = {
      version: options.version || 'retail',
      count: options.count || 1,
      discount: options.discount || 1,
    };

    /**
     * List of boosters in the roster.
     * @type {Object[]}
     */
    this.roster = [];

    /**
     * List of tickets related to the boost.
     * @type {Object[]}
     */
    this.ticket = [];

    /**
     * Modification log for the boost instance.
     * @type {Object[]}
     */
    this.modLog = [];

    /**
     * Timestamp when the boost instance was created.
     * @type {?Date}
     */
    this.createdAt = null;

    /**
     * Timestamp when the boost instance started.
     * @type {?Date}
     */
    this.startedAt = null;

    /**
     * Timestamp when the boost instance was completed.
     * @type {?Date}
     */
    this.completedAt = null;
  }

  get isCompleted() {
    return !!this.completedAt;
  }

  /**
   * Retrieves a client by its unique identifier.
   *
   * @param {number} clientId - The unique identifier of the client.
   * @returns {Object|undefined} The client object if found, otherwise undefined.
   * @example
   * const client = boost.getClient(1234);
   */
  getClient(clientId) {
    return this.client.find((client) => client.id === clientId);
  }

  /**
   * Adds one or more boosters to the roster.
   *
   * @param {Object|Object[]} booster - The booster or boosters to add to the roster.
   * @example
   * boost.addRoster({ id: 1234, name: 'Max-Silvermoon' });
   * boost.addRoster([{ id: 1234, name: 'Alex-Silvermoon' }, { id: 5678, name: 'John-Silvermoon' }]);
   */
  addRoster(booster) {
    this.roster.push(...(Array.isArray(booster) ? booster : [booster]));
  }

  /**
   * Retrieves a booster from the roster by its unique identifier.
   *
   * @param {number} boosterId - The unique identifier of the booster.
   * @returns {Object|undefined} The booster object if found, otherwise undefined.
   * @example
   * const booster = boost.getRoster(1234);
   */
  getRoster(boosterId) {
    return this.roster.find((booster) => booster.id === boosterId);
  }

  /**
   * Adds a ticket to the ticket list.
   *
   * @param {Object} ticket - The ticket object to add.
   * @param {number} ticket.id - The unique identifier of the ticket.
   * @param {string} ticket.issue - Description of the issue related to the ticket.
   * @example
   * boost.addTicket({ id: 1234, issue: 'Issue description' });
   */
  addTicket(ticket) {
    this.ticket.push(ticket);
  }

  /**
   * Retrieves a ticket from the ticket list by its unique identifier.
   *
   * @param {number} ticketId - The unique identifier of the ticket.
   * @returns {Object|undefined} The ticket object if found, otherwise undefined.
   * @example
   * const ticket = boost.getTicket(1234);
   */
  getTicket(ticketId) {
    return this.ticket.find((ticket) => ticket.id === ticketId);
  }
}
