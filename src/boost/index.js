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
   * @param {string} options.version - The version of the boost (default 'retail').
   * @param {number} [options.count=1] - The count of boosts (default 1).
   * @param {number} [options.discount=1] - The discount applied to the boost (default 1).
   */
  constructor(options) {
    this.id = options.id;
    this.type = options.type;
    this.client = options.client ? [options.client] : [];
    this.pot = options.pot;
    this.options = {
      version: options.version || 'retail',
      count: options.count || 1,
      discount: options.discount || 1,
    };
    this.roster = [];
    this.ticket = [];
  }

  /**
   * Retrieves a client by its unique identifier.
   *
   * @param {string} clientId - The unique identifier of the client.
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
   * boost.addRoster([{ id: 1234, name: 'Alex-Silvermoon' }, { id: 1234, name: 'John-Silvermoon' }]);
   */
  addRoster(booster) {
    this.roster.push(...booster);
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
   * @param {number} ticket - The ticket to add.
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
