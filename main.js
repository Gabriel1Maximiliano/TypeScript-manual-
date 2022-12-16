"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    // propiedades static se llaman directamente con el nombre de la clase Avenger.variable estática
    const antman = new Avenger('Hormiga', 'Agilidad', 'Jon Snow');
    console.log(antman);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('constructor Avenger llamado');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
    }
})();
//# sourceMappingURL=main.js.map