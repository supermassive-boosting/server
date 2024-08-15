/**
 * Represents a support ticket for issues encountered during a boost session.
 * This class manages the details of the ticket, including the issue description, status, priority, and timestamps.
 *
 * @class
 * @param {Object} options - The options for initializing the `Ticket` instance.
 * @param {number} options.id - The unique identifier for the ticket.
 * @param {string} options.issue - The description of the issue reported.
 * @param {string} [options.status='open'] - The status of the ticket (e.g., 'open', 'in-progress', 'resolved', 'closed'). Defaults to 'open'.
 * @param {string} [options.priority='normal'] - The priority level of the ticket (e.g., 'low', 'normal', 'high'). Defaults to 'normal'.
 * @param {Date} [options.createdAt=new Date()] - The date and time when the ticket was created. Defaults to the current date and time.
 * @param {Date} [options.updatedAt] - The date and time when the ticket was last updated.
 * @param {Date} [options.resolvedAt] - The date and time when the ticket was resolved. Null if not yet resolved.
 */
export default class Ticket {
  /**
   * Creates an instance of `Ticket`.
   *
   * @param {Object} options - The options for initializing the `Ticket` instance.
   * @param {number} options.id - The unique identifier for the ticket.
   * @param {string} options.issue - The description of the issue reported.
   * @param {string} [options.status='open'] - The status of the ticket.
   * @param {string} [options.priority='normal'] - The priority level of the ticket.
   * @param {Date} [options.createdAt=new Date()] - The date and time when the ticket was created.
   * @param {Date} [options.updatedAt] - The date and time when the ticket was last updated.
   * @param {Date} [options.resolvedAt] - The date and time when the ticket was resolved.
   */
  constructor(options) {
    /**
     * The unique identifier for the ticket.
     * @type {number}
     */
    this.id = options.id;

    /**
     * The description of the issue reported.
     * @type {string}
     */
    this.issue = options.issue;

    /**
     * The status of the ticket.
     * @type {string}
     * @default 'open'
     */
    this.status = options.status || 'open';

    /**
     * The priority level of the ticket.
     * @type {string}
     * @default 'normal'
     */
    this.priority = options.priority || 'normal';

    /**
     * The date and time when the ticket was created.
     * @type {Date}
     * @default current date and time
     */
    this.createdAt = options.createdAt || new Date();

    /**
     * The date and time when the ticket was last updated.
     * @type {Date|undefined}
     */
    this.updatedAt = options.updatedAt;

    /**
     * The date and time when the ticket was resolved.
     * @type {Date|undefined}
     */
    this.resolvedAt = options.resolvedAt;
  }

  /**
   * Updates the status of the ticket.
   *
   * @param {string} status - The new status of the ticket (e.g., 'open', 'in-progress', 'resolved', 'closed').
   * @throws {Error} If the provided status is invalid.
   * @example
   * ticket.updateStatus('resolved');
   */
  updateStatus(status) {
    const validStatuses = ['open', 'in-progress', 'resolved', 'closed'];
    if (!validStatuses.includes(status)) {
      throw new Error(`Invalid status: ${status}`);
    }
    this.status = status;
    this.updatedAt = new Date();
  }

  /**
   * Updates the priority level of the ticket.
   *
   * @param {string} priority - The new priority level of the ticket (e.g., 'low', 'normal', 'high').
   * @throws {Error} If the provided priority is invalid.
   * @example
   * ticket.updatePriority('high');
   */
  updatePriority(priority) {
    const validPriorities = ['low', 'normal', 'high'];
    if (!validPriorities.includes(priority)) {
      throw new Error(`Invalid priority: ${priority}`);
    }
    this.priority = priority;
    this.updatedAt = new Date();
  }

  /**
   * Resolves the ticket and sets the resolved timestamp.
   *
   * @throws {Error} If the ticket is already resolved.
   * @example
   * ticket.resolve();
   */
  resolve() {
    if (this.status === 'resolved') {
      throw new Error('Ticket is already resolved');
    }
    this.status = 'resolved';
    this.resolvedAt = new Date();
    this.updatedAt = new Date();
  }
}
