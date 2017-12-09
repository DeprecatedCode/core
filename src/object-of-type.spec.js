/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let ObjectOfType;

module.exports = class ObjectOfTypeSpec extends Spec {
  beforeEach(subject) {
    ObjectOfType = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};