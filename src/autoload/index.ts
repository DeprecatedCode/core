/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  ReservedProxyProperties,
  PlainString,
  TransformName
} = require('./');

let path = require('path');

module.exports = function Autoload(...args) {
  let root = PlainString.allFrom(args);
  let instanceModules = {};

  return new Proxy({}, {
    get: function (target, name) {
      if (name in ReservedProxyProperties) {
        return target[name];
      }
      if (!(name in instanceModules)) {
        instanceModules[name] = require(path.join(...root, TransformName(name)));
      }
      return instanceModules[name];
    }
  });
};