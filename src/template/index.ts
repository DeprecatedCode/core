/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  ContentType,
  PlainString
} = require('./');

module.exports = class Template extends Base {
  construct(...args) {
    this.contents = PlainString.from(args);
    this.contentType = ContentType.from(args);
  }
};