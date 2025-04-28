
console.log("Cargando desde typescript")

interface IUsuario{
  id: number
 nombre: string
 edad: number
 email: string
 activo: boolean
}

type UsuarioType={
  id: number
  nombre: string
  edad: number
  email: string
  activo: boolean
}
/* La diferencia entre interface y type es que si bien ambos pueden tipar objetos, en los type no se puede 
extender otros types distintos, aunque si permite realizar uniones e intersecciones, y type no permite declaraciones 
multiples con el mismo nombre, si no que tienen que tener nombres unicos. Mientras que en las interface si se pueden extender con extends
y si se pueden declarar interfaces con el mismo nombre, que se combinarían para una unica interfaz*/


console.log("Primer ejercicio terminado")


const usuarios: IUsuario[] = [
  {
    id: 1,
    nombre:'Geronimo Lopez',
    edad: 25,
    email: 'geroo.lopez4@gmail.com',
    activo: true
  },
  {
    id: 2,
    nombre:'Matias Crescitelli',
    edad: 20,
    email: 'matic@gmail.com',
    activo: false
  },
  {
    id: 3,
    nombre:'Federico Rodriguez',
    edad: 46,
    email: 'fr10@gmail.com',
    activo: true
  }
];

 const usuariosActivos = usuarios.filter(usuarios => usuarios.activo);
 console.log(usuariosActivos);

console.log("Ejercicio 2 terminado")


class UsuarioClase implements IUsuario{
  id: number;
 nombre: string;
 edad: number;
 email: string;
 activo: boolean;

 constructor(id:number, nombre:string, edad:number, email:string, activo:boolean ){
  this.id = id;
  this.nombre = nombre;
  this.edad = edad;
  this.email = email;
  this.activo = activo
 }

 toogleActivo():void{
  this.activo = !this.activo;
 }
}


const usuario1 = new UsuarioClase( 1,'Geronimo Lopez',25,'geroo.lopez4@gmail.com',true);
console.log(usuario1)
usuario1.toogleActivo();
console.log(usuario1)

const usuario2 = new UsuarioClase(14, "Pedro Perez", 79, "peperez@gmail.com", false);
console.log(usuario2);
usuarios.push(usuario2);
usuario2.toogleActivo();
console.log(usuario2);

console.log('Ejercicio 3 terminado');


class AdminUsuario extends UsuarioClase{
    permisos: String[];

    constructor(id: number, nombre: string, edad: number, email: string, activo: boolean, permisos: string[]) {
      super(id, nombre, edad, email, activo); // Llamada al constructor de la clase base
      this.permisos = permisos;
    }
}

const administrador = new AdminUsuario(6, "Juan Pablo", 32, "juanpa2@gmail.com", true, ["borrar", "actualizar", "crear"]);
console.log(administrador);
console.log(administrador.permisos)

console.log("Ejercicio 4 terminado")

type Producto ={
  id: number
 nombre: string
  precio: number
  stock: number
}

const arrayProductos : Producto[] =[
  {
    id: 1,
    nombre: 'Gaseosa',
    precio: 2300,
    stock: 15
  },
  {
    id: 2,
    nombre: 'Papas',
    precio: 100,
    stock: 3
  },
  {
    id: 3,
    nombre: 'Chicles',
    precio: 600,
    stock: 0
  }
]

console.log(arrayProductos);

const arrayNombreProductos = arrayProductos.map(arrayProductos => arrayProductos.nombre);
console.log(arrayNombreProductos);


const arrayProductosStock = arrayProductos.filter(arrayProductos => arrayProductos.stock>0).map(arrayProductos => arrayProductos.nombre);
console.log(arrayProductosStock);

console.log("Ejercicio 5 terminado");


arrayProductos.sort((a, b) => a.precio - b.precio);
console.log(arrayProductos)


const producto4: Producto = {
  id: 4,
  nombre: 'Queso',
  precio: 4200,
  stock: 10
}

arrayProductos.push(producto4);
console.log("Objetos previos al pop: ", arrayProductos);
//por consola dice que son 4 objetos pero muestra los primeros 3 solamente porque se ve afectado por el siguiente pop

arrayProductos.pop();
console.log("Objetos luego del pop: ", arrayProductos);

console.log("Ejercicio 6 terminado")


function getRandomItem <T> (elementos: T[]):T{
  const randomId = Math.floor(Math.random() * elementos.length);
  return elementos[randomId]
}

const arrayNumeros : number[] = [1, 2, 3, 6 , 7, 8];

console.log(arrayNumeros)
console.log(getRandomItem(arrayNumeros))

const arrayString: string[] = ['Hola','mundo','Geronimo', 'Typescript', 'Trabajo']
console.log(arrayString)
console.log(getRandomItem(arrayString))


console.log(arrayProductos)
console.log(getRandomItem(arrayProductos))

console.log("Ejercicio 7 terminado")


interface Caja<T>{
  contenido: T;
}

class CajaClass<T> implements Caja<T>{
  contenido: T;

  constructor(contenido:T){
    this.contenido = contenido;
  }
}

const CajaString = new CajaClass<String>("Probando generico")
console.log(CajaString)

const CajaNumber = new CajaClass<number>(16513)
console.log(CajaNumber)

const CajaObjeto = new CajaClass<Producto>({

  id: 5,
  nombre: 'Leche',
  precio: 1700,
  stock: 1
})

console.log(CajaObjeto)

console.log("Ejercicio 8 terminado")


function obtenerDatos(): Promise<IUsuario[]> {
  return new Promise((resolve) =>{
    setTimeout(() => {
      const usuarios2: IUsuario[] = [
        { id: 6, nombre: "Luca", edad: 18, email: "LucaC@gmail.com", activo: true },
        { id: 7, nombre: "Paula", edad: 51, email: "Paulita@gmail.com", activo: false },
        { id: 8, nombre: "Julieta", edad: 29, email: "julilo@gmail.com", activo: true },
      ];
      resolve(usuarios2)
    }, 3000);
  })
}


async function mostrarDatos() {
  const datos = await obtenerDatos();
  console.log("Datos obtenidos:", datos);
}


mostrarDatos();
console.log("Ejercicio 9 completado")



async function obtenerUsuarioAPI() {
  try{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log("Usuarios desde la API; ", data)
  }catch(error) {
    console.log("Error al obtener los usuarios: ", error)
  }
}

obtenerUsuarioAPI()
console.log("Ejercicio 10 completado")



function renderUsuarios(usuarios: IUsuario[]): void {

  const lista = document.getElementById('listaUsuarios') as HTMLUListElement;
  lista.innerHTML = '';

  usuarios.forEach(usuario => {
    const li = document.createElement('li'); 
    li.innerHTML = `${usuario.nombre} - ${usuario.email}`;
    lista.appendChild(li);
  });
}

console.log("Ejercicio 11 completado")



const botonCargarUsuarios = document.getElementById('cargar-usuarios') as HTMLButtonElement;

botonCargarUsuarios.addEventListener('click', () => {
  renderUsuarios(usuarios);
})

console.log("Ejercicio 12 completado")