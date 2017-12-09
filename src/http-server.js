/*
 * @author Nate Ferrero
 * @email nateferrero@gmail.com
 */
let {
  Base,
  Host,
  Logger,
  Port,
  Request,
  Response,
  Router
} = require('./');

module.exports = class HttpServer extends Base {
  construct(...args) {
    this.server = require('http').createServer((request, response) => {
      this.handleRequest(Request.with(request), Response.with(response));
    });
    this.routers = Router.allFrom(args);
    this.logger = Logger.optionalFrom(args);
  }

  listen(...args) {
    let host = Host.optionalFrom(args);
    let port = Port.from(args);
    this.server.listen({
      port: port.number,
      host: host.value
    });
    if (this.logger) {
      this.logger.log(`HttpServer listening on ${host}:${port}`);
    }
  }

  addRouters(...args) {
    this.routers.push(...Router.allFrom(args));
  }

  handleRequest(...args) {
    let request = Request.from(args);
    let response = Response.from(args);
    let url = request.url;
    let httpMethod = request.httpMethod;
    let routed = this.routers.some(router => router.route(url, httpMethod, request, response));

    if (routed) {
      if (this.logger) {
        this.logger.log(`HttpServer ${httpMethod.method} ${url} Route Matched`);
      }
    }

    else {
      if (this.logger) {
        this.logger.log(`HttpServer ${httpMethod.method} ${url} Not Found`);
      }
      this.emit.NotFound(response);
    }
  }
};