/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base
} = require('./');

module.exports = class Logger extends Base {
  construct(...args) {
  }

  log(...args) {
    console.log(...args);
  }
};