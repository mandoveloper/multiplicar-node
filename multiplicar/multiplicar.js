const fs = require("fs");
const { rejects } = require("assert");

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        let data = "";

        if (!Number(base)) {
            reject('El valor ingresado no es un numero');
            return;
        }
        for (let i = 1; i <= 10; i++) {
            data += `${base} x ${i}  = ${i * base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`);
        });
    });
};

module.exports = {
    crearArchivo
}