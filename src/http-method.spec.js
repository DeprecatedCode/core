/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let HttpMethod;

module.exports = class HttpMethodSpec extends Spec {
  beforeEach(subject) {
    HttpMethod = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};