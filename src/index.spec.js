/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

module.exports = class IndexSpec extends Spec {
  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};