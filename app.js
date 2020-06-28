const { crearArchivo } = require('./multiplicar/multiplicar.js');

// let base = 7;
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1];

crearArchivo(base)
    .then(archivo => {
        console.log(`Archivo creado ${archivo}`);

    }, (err) => {
        console.log(err);
    });

// console.log(process.argv);