/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  DatastoreInMemory
} = require('./');

module.exports = class Datastore extends Base {
  static get memory() {
    return DatastoreInMemory.new;
  }
};