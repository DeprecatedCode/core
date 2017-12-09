/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let modules = {
  TransformName: name =>
    `./${name.replace(/.[A-Z]/g,
                      x => `${x[0]}-${x[1]}`)}`.toLowerCase(),
  TransformNameReverse: transformed =>
    transformed.replace(/^.|-./g,
                        x => x.replace('-', '').toUpperCase()),
  ReservedProxyProperties: {
    'prototype': true,
    'name': true,
    'constructor': true,
    'toString': true
  }
};

module.exports = new Proxy({}, {
  get: function (target, name) {
    if (name in modules.ReservedProxyProperties) {
      return target[name];
    }
    if (!(name in modules)) {
      modules[name] = require(modules.TransformName(name));
    }
    return modules[name];
  }
});