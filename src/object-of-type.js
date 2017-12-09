/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  PlainFunction
} = require('./');

module.exports = class ObjectOfType extends Base {
  construct(...args) {
    this.type = PlainFunction.from(args);
  }

  test(subject) {
    return typeof subject === 'object' && subject.constructor === this.type;
  }

  from(args) {
    return Base.from.call(this, args);
  }
};