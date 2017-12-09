/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let modules = require(__dirname);
let path = require('path');

let tests = require('fs').readdir(__dirname, function (err, files) {
  if (err) {
    throw err;
  }
  const spec = '.spec.js';
  files = files.filter(file => file.endsWith(spec));
  let successCases = 0;
  let failureCases = 0;
  let totalCases = 0;
  files.map(function (file) {
    let cls = require(path.join(__dirname, file));
    let runner = new cls;
    if (!runner.runTests) {
      throw new Error(`Unable to run tests in ${file}`);
    }
    let subjectName = modules.TransformNameReverse(file.replace(spec, ''));
    let subject = modules[subjectName];
    runner.runTests(subject, function (success, failure, total) {
      console.log(`${cls.name}: ${success} succeeded, ${failure} failed, ${total} total`);
      successCases += success;
      failureCases += failure;
      totalCases += total;
    });
    console.log();
  });
  console.log(`Final results in ${files.length} specs: ${successCases} succeeded, ${failureCases} failed, ${totalCases} total`);
});