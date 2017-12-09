/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  PlainString
} = require('./');

let methods = {};

module.exports = class HttpMethod extends Base {
  construct(...args) {
    this.method = PlainString.from(args);
  }

  static get Get() {
    return HttpMethod.with('GET');
  }

  static get Post() {
    return HttpMethod.with('POST');
  }

  static get Put() {
    return HttpMethod.with('PUT');
  }

  static get Patch() {
    return HttpMethod.with('PATCH');
  }

  static get Delete() {
    return HttpMethod.with('DELETE');
  }

  static with(...args) {
    let method = PlainString.from(args);
    if (!(method in methods)) {
      methods[method] = Base.with.call(HttpMethod, method);
    }
    return methods[method];
  }

  is(...args) {
    let httpMethod = HttpMethod.from(args);
    return httpMethod.method === this.method;
  }
};