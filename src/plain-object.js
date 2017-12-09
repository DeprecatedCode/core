/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base
} = require('./');

module.exports = class PlainObject extends Base {
  static test(subject) {
    return typeof subject === 'object' && subject.constructor === Object;
  }
};