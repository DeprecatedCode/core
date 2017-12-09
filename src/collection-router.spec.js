/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let CollectionRouter;

module.exports = class CollectionRouterSpec extends Spec {
  beforeEach(subject) {
    CollectionRouter = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};