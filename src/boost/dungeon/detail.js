/**
 * Represents detailed information about a dungeon run, including start and end times,
 * keystone level, whether the dungeon was completed in time, and the Mythic+ rating.
 *
 * @class
 * @param {Object} options - The options for initializing the `Detail` instance.
 * @param {Date} options.createdAt - The date and time when the detail was created.
 * @param {Date} [options.startTime] - The start time of the dungeon run.
 * @param {Date} [options.endTime] - The end time of the dungeon run.
 * @param {number} [options.keystoneLevel] - The level of the keystone used in the dungeon.
 * @param {boolean} [options.inTime] - Indicates whether the dungeon was completed in time.
 * @param {number} [options.rating] - The Mythic+ rating of the dungeon run.
 */
export default class Detail {
  /**
   * Creates an instance of `Detail`.
   *
   * @param {Object} options - The options for initializing the `Detail` instance.
   * @param {Date} options.createdAt - The date and time when the detail was created.
   * @param {Date} [options.startTime] - The start time of the dungeon run.
   * @param {Date} [options.endTime] - The end time of the dungeon run.
   * @param {number} [options.keystoneLevel] - The level of the keystone used in the dungeon.
   * @param {boolean} [options.inTime] - Indicates whether the dungeon was completed in time.
   * @param {number} [options.rating] - The Mythic+ rating of the dungeon run.
   */
  constructor(options) {
    /**
     * The date and time when the detail was created.
     * @type {Date}
     */
    this.createdAt = options.createdAt;

    /**
     * The start time of the dungeon run.
     * @type {Date|undefined}
     */
    this.startTime = options.startTime;

    /**
     * The end time of the dungeon run.
     * @type {Date|undefined}
     */
    this.endTime = options.endTime;

    /**
     * The level of the keystone used in the dungeon.
     * @type {number|undefined}
     */
    this.keystoneLevel = options.keystoneLevel;

    /**
     * Indicates whether the dungeon was completed in time.
     * @type {boolean|undefined}
     */
    this.inTime = options.inTime;

    /**
     * The Mythic+ rating of the dungeon run.
     * @type {number|undefined}
     */
    this.rating = options.rating;
  }

  /**
   * Checks if the dungeon was completed within the allowed time.
   *
   * @returns {boolean} `true` if the dungeon was completed in time, `false` otherwise.
   * @example
   * const completedInTime = detail.wasCompletedInTime();
   */
  get isIntime() {
    return this.inTime;
  }

  /**
   * Calculates the duration of the dungeon run.
   *
   * @returns {number|undefined} The duration of the dungeon run in milliseconds, or `undefined` if start or end time is missing.
   * @example
   * const duration = detail.calculateDuration();
   */
  calculateDuration() {
    if (this.startTime && this.endTime) {
      return this.endTime - this.startTime;
    }
    return undefined;
  }
}
