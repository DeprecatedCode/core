/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  Integer,
  ObjectOfType,
  Template
} = require('./');

let {ServerResponse} = require('http');

module.exports = class Response extends Base {
  construct(...args) {
    this.originalServerResponse = ObjectOfType.with(ServerResponse).from(args);
  }

  sendStatusCode(...args) {
    let statusCode = Integer.inRange(100, 599).from(args);
    let target = this;
    return function(...args) {
      let template = Template.from(args);
      target.originalServerResponse.writeHead(statusCode, {'Content-Type': template.contentType.value});
      target.originalServerResponse.end(template.contents);
    };
  }

  get sendOk() {
    return this.sendStatusCode(200);
  }

  get sendNoContent() {
    return this.sendStatusCode(204);
  }

  get sendBadRequest() {
    return this.sendStatusCode(400);
  }

  get sendNotFound() {
    return this.sendStatusCode(404);
  }

  get sendServerError() {
    return this.sendStatusCode(500);
  }

  json(data) {
    this.originalServerResponse.json(data);
  }
};