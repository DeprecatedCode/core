/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let PlainFunction;

module.exports = class PlainFunctionSpec extends Spec {
  beforeEach(subject) {
    PlainFunction = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};