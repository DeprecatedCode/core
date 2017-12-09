/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let Datastore;

module.exports = class DatastoreSpec extends Spec {
  beforeEach(subject) {
    Datastore = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};