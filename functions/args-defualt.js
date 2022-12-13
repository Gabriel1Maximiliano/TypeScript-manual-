"use strict";
(() => {
    const fullName = (firstNAme, lastName, upper = false) => {
        // el símbolo de interrogación le dice a ts puede o no venir
        if (upper) {
            return `${firstNAme} ${lastName || '----'}`.toLocaleUpperCase();
        }
        else {
            return `${firstNAme} ${lastName || '----'}`;
        }
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
