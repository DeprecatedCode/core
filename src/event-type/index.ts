/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  PlainFunction,
  PlainString
} = require('./');

module.exports = class EventType extends Base {
  construct(...args) {
    this.type = PlainString.from(args);
    this.actions = [];
  }

  addActions(...args) {
    this.actions.push(...PlainFunction.allFrom(args));
  }

  emit(...args) {
    this.actions.map(action => action(...args));
  }
};