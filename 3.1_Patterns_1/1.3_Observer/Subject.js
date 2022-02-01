class NumberExample extends Observable {
    constructor() {
        super();
        this.value = 0;
    }

    increment() {
        this.value++;

        // Llama a los suscriptores
        this.notify(this);
    }
}
module.exports= NumberExample;