/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  Integer
} = require('./');

module.exports = class Port extends Base {
  construct(...args) {
    this.number = Integer.inRange(0, 0xFFFF).from(args);
  }
};