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
//# sourceMappingURL=main.js.map