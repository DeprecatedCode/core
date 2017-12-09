/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let Spec = require('./spec');

let DocumentationRouter;

module.exports = class DocumentationRouterSpec extends Spec {
  beforeEach(subject) {
    DocumentationRouter = subject;
  }

  testConstruct(assert) {
    assert(false);
  }
  
  testNothing(assert) {
    throw new Error('test failed');
  }
};