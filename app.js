"use strict";
const totalPrice = (obj) => {
    if (obj.isInstallment) {
        return obj.price * (1 - obj.discount / 100) / obj.months;
    }
    else {
        return obj.price * (1 - obj.discount / 100);
    }
};
const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
