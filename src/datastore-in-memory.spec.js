/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let DatastoreInMemory;

module.exports = class DatastoreInMemorySpec extends Spec {
  beforeEach(subject) {
    DatastoreInMemory = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};