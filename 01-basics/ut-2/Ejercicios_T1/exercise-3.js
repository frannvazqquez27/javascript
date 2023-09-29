const miObjetoLiteral = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    intereses: ["programación", "música", "viajar"],
    direccion: {
      calle: "Calle Principal",
      numero: 123,
      codigoPostal: "28001"
    },
    contacto: {
      email: "juan@example.com",
      telefono: "+34 123 456 789"
    },
    trabajosAnteriores: ["Desarrollador web", "Diseñador gráfico"]
};

function obtenerClaves(objeto) {
  return Object.keys(objeto);
}
  
const claves = obtenerClaves(miObjetoLiteral);
console.log(claves);

function obtenerValores(objeto) {
  return Object.values(objeto);
}

const valores = obtenerValores(miObjetoLiteral);
console.log(valores); 