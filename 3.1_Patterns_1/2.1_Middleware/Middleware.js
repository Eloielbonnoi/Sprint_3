"use strict";
class Middleware {
    constructor() {
        this.middlewares = []
    }
    
    use(fn) {
        this.middlewares.push(fn);
    }

    executeMiddleware(num1, num2) {
        this.middlewares.forEach(middleware => middleware(num1, num2));
      } 
      run(data) {
        this.executeMiddleware(data, done => console.log(data));
      }
}
module.exports = Middleware;