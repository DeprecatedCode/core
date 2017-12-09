/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let Router;

module.exports = class RouterSpec extends Spec {
  beforeEach(subject) {
    Router = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};