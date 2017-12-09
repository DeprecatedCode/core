/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
module.exports = class Base {
  construct() {
    // noop
  }

  static get new () {
    return this.with();
  }

  static notFound() {
    return new Error(`Unable to find instance of ${this.name} in arguments`);
  }

  static from(args) {
    if (args.length === 0) {
      throw this.notFound();
    }
    return args.find((value, index) => {
      if (this.test(value)) {
        args.splice(index, 1)
        return true;
      }
      if (index === args.length - 1) {
        throw this.notFound();
      }
    });
  }

  static optionalFrom(args) {
    if (args.length === 0) {
      return;
    }
    return args.find((value, index) => {
      if (this.test(value)) {
        args.splice(index, 1)
        return true;
      }
    });
  }

  static allFrom(args) {
    let removeIndices = [];
    let result = args.filter((value, index) => {
      if (this.test(value)) {
        removeIndices.push(index);
        return true;
      }
    });
    while (removeIndices.length > 0) {
      args.splice(removeIndices.pop(), 1);
    }
    return result;
  }

  static with(...args) {
    let instance = new this;
    instance.construct(...args);
    return instance;
  }

  static test(subject) {
    return subject && subject.constructor === this;
  }

  get on() {
    if (!this.$channel) {
      let {Channel} = require('./');
      this.$channel = Channel.new;
    }
    return this.$channel.on;
  }
  
  get emit() {
    if (!this.$channel) {
      let {Channel} = require('./');
      this.$channel = Channel.new;
    }
    return this.$channel.emit;
  }
};