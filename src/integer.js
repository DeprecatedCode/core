/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base
} = require('./');

module.exports = class Integer extends Base {
  static test (subject) {
    return Number.isInteger(subject);
  }

  static inRange(...args) {
    let low = Integer.from(args);
    let high = Integer.from(args);
    return {
      from: function (originalArgs) {
        let candidate = Integer.from(originalArgs);
        if (candidate < low) {
          throw new RangeError(`The value provided (${candidate}) must be greater than or equal to ${low}`);
        }
        if (candidate > high) {
          throw new RangeError(`The value provided (${candidate}) must be less than or equal to ${high}`);
        }
        return candidate;
      }
    }
  }
};