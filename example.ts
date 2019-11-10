class Persona {
    id: number;
    nombre: string;
    apellidos: string;
    edad: number;
    dni: string;

    constructor(id: number, nombre: string, apellidos: string, edad: number, dni: string) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
    }

    // getNombreCompleto(nombre: string, apellidos: string): string {
    //     return `${nombre} ${apellidos}`;
    // }

    getRealNombreCompleto(): string {
        return `${this.nombre}  ${this.apellidos}`;
    }

}

const persona1 = new Persona(1, 'Abel', 'Cabeza Román', 24, '4728218S');
console.log('##ABEL## >>  >>  ', persona1.id);
console.log('##ABEL## >>  >>  ', persona1.getRealNombreCompleto());
enum TipoJornada {
    C = 'completa',
    R = 'reducida'
}


interface Categoria {
    id: number,
    nombre: string
}

class Producto {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: Categoria;

    constructor(id: number, nombre: string, cantidad: number, categoria: Categoria) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Empleado extends Persona {
    puesto: string;
    tipoJornada: TipoJornada;
    salario: number;

    constructor(id: number, nombre: string, apellidos: string, edad: number, dni: string, puesto: string, tipoJornada: TipoJornada, salario: number) {
        super(id, nombre, apellidos, edad, dni);
        this.puesto = puesto;
        this.tipoJornada = tipoJornada;
        this.salario = salario;
    }
}


const producto1 = new Producto(13, 'Camiseta', 33, {id: 12, nombre: 'Zara'});

console.log('##ABEL## >>  >>  ', producto1.id);
console.log('##ABEL## >>  >>  ', producto1.categoria.id);
//
//
// class Animal {
//     nombre: string;
//
//     constructor(nombre: string) {
//         this.nombre = nombre;
//     }
// }
//
// class Tigre extends Animal {
//     depilado: boolean;
//
//     constructor(depilado: boolean, nombre: string) {
//         super(nombre);
//         this.depilado = depilado;
//     }
//
//     hagoMiau(): string {
//         return '';
//     }
// }
//
// interface NombreDeLaInterface {
//     nombre: string,
//     apellido: string
// }
//
// new Animal('Tigre');
// new Tigre(true, 'Tigre');
//
// enum Peligroso {
//     Si = 1,
//     No = 0
// }
