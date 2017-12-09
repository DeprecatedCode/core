/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  EventType,
  ReservedProxyProperties
} = require('./');

module.exports = class Channel extends Base {
  construct() {
    this.eventTypes = {};
  } 

  get on() {
    return new Proxy(this, {
      get: function (target, type) {
        if (type in ReservedProxyProperties) {
          return target[type];
        }
        if (!(type in target.eventTypes)) {
          target.eventTypes[type] = EventType.with(type);
        }
        return function addEventActions(...args) {
          target.eventTypes[type].addActions(...args);
        }
      }
    });
  }

  get emit() {
    return new Proxy(this, {
      get: function (target, type) {
        if (type in ReservedProxyProperties) {
          return target[type];
        }
        if (!(type in target.eventTypes)) {
          target.eventTypes[type] = EventType.with(type);
        }
        return function emitEvent(...args) {
          target.eventTypes[type].emit(...args);
        }
      }
    });
  }
};