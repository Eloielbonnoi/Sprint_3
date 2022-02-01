/*
Escriu una aplicació que creï diferents objectes Usuari. L'aplicació podrà crear diferents Temes i subscriure els usuaris a ells. 
Quan un Usuari afegeixi un missatge a un Tema s'enviarà una alerta per la consola des del Tema. També ho mostraran per consola cadascun dels Usuaris 
que estiguin subscrits al Tema (rebran el missatge). Crea un Tema amb un Usuari i un altre amb dos i mostra la recepció dels missatges pels usuaris. 
Utilitza el mòdul events. tema = observable, users= observadors
*/
//Segurament aquest seria la classe tema. 
class Tema {
    constructor() {
        this.observers = [];  //users
    }

    //Mètode addMessage (reb un missatge i un user (si l'user està registrat) té a dins el mètode notify)
    // Suscribe una clase notificadora
    subscribe(c) {
        this.observers.push(c);
    }

    // Desuscribe la clase notificadora
    unsubscribe(c) {
        this.observers = this.observers.filter(observer => observer instanceof c !== true);
    }

    // Llama a todos nuestros suscriptores
    notify(model) {
        this.observers.forEach(observer => {
            observer.notify(model);
        });
    }
}
module.exports = Observable;