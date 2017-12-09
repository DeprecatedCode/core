/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  PlainObject
} = require('./');

module.exports = class DatastoreInMemory extends Base {
  construct(...args) {
    this.data = {};
    this.collections = {};
  }
  
  collection(key) {
    if (!(key in this.collections)) {
      this.collections[key] = DatastoreInMemory.new;
    }
    return this.collections[key];
  }

  get(key) {
    return new Promise((resolve, reject) => {
      if (key in this.data) {
        resolve(this.data[key]);
      }
      else {
        reject(`Object key ${key} not found in DatastoreInMemory instance`);
      }
    });
  }

  set(key, value) {
    return new Promise((resolve, reject) => {
      this.data[key] = value;
      resolve();
    });
  }
};