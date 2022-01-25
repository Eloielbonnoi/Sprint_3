"use strict";
class Middleware {
    constructor() {
        this.middlewares = []
    }

    // get middlewares() {
    //     return this.middlewares;
    // }

    //Mètode use reb una funció i l'afegeix a l'array

    use(fn) {
        this.middlewares.push(fn);
    }

    executeMiddleware(middlewares, data, next) {
        this.middlewares.reduceRight((done, next) => () => next(data, done), done)
            (data);
    }
    run(message) {
        this.executeMiddleware(this.middlewares, message, function (msg, next) {
            console.log('the initial message : ' + message);
        });
    }
}
module.exports = Middleware;