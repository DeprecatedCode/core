/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  PlainString
} = require('./');

module.exports = class Host extends Base {
  construct(...args) {
    this.value = PlainString.from(args);
  }
};