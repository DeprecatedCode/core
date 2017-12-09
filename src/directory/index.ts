/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  DefaultExtension,
  PlainString,
  ReservedProxyProperties,
  Router,
  TransformName
} = require('./');

let fs = require('fs');
let path = require('path');

module.exports = class Directory extends Base {
  construct(...args) {
    this.path = PlainString.from(args);
    this.routers = Router.allFrom(args);
    this.defaultExtensions = DefaultExtension.allFrom(args);
  }

  get readFile() {
    return new Proxy(this, {
      get: function (target, name) {
        if (name in ReservedProxyProperties) {
          return target[name];
        }
        let filePath = path.join(target.path, TransformName(name));
        if (target.defaultExtensions.length) {
          filePath = `${filePath}.${target.defaultExtensions[0].extension}`;
        }
        let extension = path.extname(filePath).substr(1);
        return new Promise(function (resolve, reject) {
          fs.readFile(filePath, 'utf8', function(err, contents) {
            if (err) {
              reject(err);
            }
            else {
              target.routers.forEach(router => {
                router.route(extension, contents, x => contents = x);
              });
              resolve(contents);
            }
          });
        });
      }
    })
  }
};