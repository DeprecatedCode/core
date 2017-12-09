/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  PlainString
} = require('./');

module.exports = class ContentType extends Base {
  construct(...args) {
    this.value = PlainString.from(args);
  }

  static get html() {
    return ContentType.with('text/html');
  }
};