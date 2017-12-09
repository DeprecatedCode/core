/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let PlainObject;

module.exports = class PlainObjectSpec extends Spec {
  beforeEach(subject) {
    PlainObject = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};