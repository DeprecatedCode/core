/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  HttpMethod,
  ObjectOfType
} = require('./');

let {IncomingMessage} = require('http');

module.exports = class Request extends Base {
  construct(...args) {
    this.data = ObjectOfType.with(IncomingMessage).from(args);
  }

  get url() {
    return this.data.url;
  }

  get httpMethod() {
    return HttpMethod.with(this.data.method);
  }
};