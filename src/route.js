/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  HttpMethod,
  PlainFunction,
  PlainString
} = require('./');

module.exports = class Route extends Base {
  construct(...args) {
    this.paths = PlainString.allFrom(args);
    this.httpMethods = HttpMethod.allFrom(args);
    this.filters = PlainFunction.allFrom(args);
  }

  matches(...args) {
    let path = PlainString.from(args);
    let httpMethod = HttpMethod.optionalFrom(args);
    if (this.httpMethods.length > 0 && httpMethod) {
      if (!this.httpMethods.includes(httpMethod)) {
        return;
      }
    }
    return this.paths.includes(path);
  }

  then(...args) {
    let action = PlainFunction.optionalFrom(args);
    if (action) {
      this.filters.forEach(filter => action(filter(...args)));
    }
    else {
      this.filters.forEach(filter => filter(...args));
    }
  }
};