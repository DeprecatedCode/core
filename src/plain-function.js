/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base
} = require('./');

module.exports = class PlainFunction extends Base {
  static test(subject) {
    return typeof subject === 'function';
  }
};