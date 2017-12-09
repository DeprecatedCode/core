/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  PlainString
} = require('./');

module.exports = class DefaultExtension extends Base {
  construct(...args) {
    this.extension = PlainString.from(args);
  }
};