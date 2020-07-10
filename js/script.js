'use strict';

class Storage {

    constructor() {
        this.input = document.querySelector('input');
        this.buttons = document.querySelectorAll('button');
        this.assignEvents();
    }

    assignEvents() {

        this.buttons.forEach((elem, index) => {

            elem.addEventListener('click', () => {

                switch (index) {
                    case 0:
                        this.addStorage();
                        break;
                    case 1:
                        this.getStorage();
                        break;
                    case 2:
                        this.removeStorage();
                        break;
                    default:
                        console.log('nieznana akcja')
                }
            });
        });
    }

    addStorage() {

        localStorage.setItem("localStorage", this.input.value);
    };

    getStorage() {

        if (localStorage.getItem("localStorage") != null) {
            alert(`Zapisany localStorage to: ${localStorage.getItem("localStorage")}`);
        }


    }

    removeStorage() {

        localStorage.removeItem("localStorage");

    }

}

new Storage;