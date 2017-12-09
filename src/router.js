/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  HttpMethod,
  PlainFunction,
  PlainString,
  Route
} = require('./');

module.exports = class Router extends Base {
  construct(...args) {
    this.routes = Route.allFrom(args);
  }

  route(...args) {
    let path = PlainString.from(args);
    let httpMethod = HttpMethod.optionalFrom(args);
    let action = PlainFunction.optionalFrom(args);
    return this.routes.some(route => {
      if (route.matches(path, httpMethod)) {
        if (action) {
          route.then(action, ...args);
        }
        else {
          route.then(...args);
        }
        return true;
      }
    })
  }
};