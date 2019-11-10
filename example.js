var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(id, nombre, apellidos, edad, dni) {
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
    }
    Persona.prototype.getNombreCompleto = function (nombre, apellido) {
        return nombre + " " + apellido;
    };
    Persona.prototype.getRealNombreCompleto = function () {
        return this.nombre + "  " + this.apellidos;
    };
    return Persona;
}());
var persona1 = new Persona(1, 'Abel', 'Cabeza Román', 24, '4728218S');
console.log('##ABEL## >>  >>  ', persona1.id);
console.log('##ABEL## >>  >>  ', persona1.getRealNombreCompleto());
var TipoJornada;
(function (TipoJornada) {
    TipoJornada["C"] = "completa";
    TipoJornada["R"] = "reducida";
})(TipoJornada || (TipoJornada = {}));
var Producto = /** @class */ (function () {
    function Producto(id, nombre, cantidad, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
    return Producto;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(id, nombre, apellidos, edad, dni, puesto, tipoJornada, salario) {
        var _this = _super.call(this, id, nombre, apellidos, edad, dni) || this;
        _this.puesto = puesto;
        _this.tipoJornada = tipoJornada;
        _this.salario = salario;
        return _this;
    }
    return Empleado;
}(Persona));
var producto1 = new Producto(13, 'Camiseta', 33, { id: 12, nombre: 'Zara' });
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
