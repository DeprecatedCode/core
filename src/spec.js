/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let assert = require('assert');

module.exports = class Spec {
  runTests(subject, done) {
    let successCount = 0;
    let failureCount = 0;
    let totalCount = 0;
    let testKeys = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    testKeys.filter(x => x.startsWith('test')).forEach(testKey => {
      totalCount++;
      try {
        if (this.beforeEach) {
          this.beforeEach(subject);
        }
        this[testKey](assert);
        successCount++;
      }
      catch (e) {
        failureCount++;
        console.error(`:: Failed :: ${this.constructor.name}.${testKey} (${e.message})`);
      }
      finally {
        if (this.afterEach) {
          this.afterEach(subject);
        }
      }
    });

    done(successCount, failureCount, totalCount);
  }
};