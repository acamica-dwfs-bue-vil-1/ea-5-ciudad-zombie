/* Aca podes encontrar al zombie caminante cuyo codigo esta completo. Podes
modificarlo para hacer que se comporte de la forma que mas te guste.
Este zombie recibe los mismos parametros que el objeto Enemigo. Podes consultar
el archivo Enemigo.js para entender que es cada uno. */

class ZombieCaminante extends Enemigo {
  constructor (sprite, x, y, velocidad) {
    super(sprite, x, y, 10, 10, velocidad, {desdeX: 0, hastaX: 961, desdeY: 0, hastaY: 577});
  }
  mover () {
    if (Math.random() < 0.5) {
      this.x -= this.velocidad;
      this.y -= this.velocidad;
    } else {
      //Sino, hace otro movimiento
      this.y += this.velocidad;
      this.x -= this.velocidad;
    }
  
    /* En esta parte lo que hacemos es invertir la direccion horizontal si
    toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
    velocidad lo que estamos haciendo es invertir su direccion.*/
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
      this.velocidad *= -1;
    }
    // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
      this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
    }
  }
}

class ZombieCaminante1 extends ZombieCaminante {
  constructor (x, y) {
    super('imagenes/zombie1.png', x, y, 1);
  }
}

class ZombieCaminante2 extends ZombieCaminante {
  constructor (x, y) {
    super('imagenes/zombie2.png', x, y, 2);
  }
}

class ZombieCaminante3 extends ZombieCaminante {
  constructor (x, y) {
    super('imagenes/zombie3.png', x, y, 3);
  }
}

class ZombieCaminante4 extends ZombieCaminante {
  constructor (x, y) {
    super('imagenes/zombie4.png', x, y, 4);
  }
}

// var ZombieCaminante = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
//   /* ZombieCaminante llama al constructor de Enemigo utilizando los parametros
//   necesarios */
//   Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
// }
// /* Completamos la creacion del objeto asignando su prototipo y la funcion
// constructor para poder usarla con 'new' al crear nuevos Zombies Caminantes */
// ZombieCaminante.prototype = Object.create(Enemigo.prototype);
// ZombieCaminante.prototype.constructor = ZombieCaminante;

// ZombieCaminante.prototype.mover = function() {
//   /* Los movimientos estan basados en un numero aleatorio
//   La direccion horizontal es siempre la misma y va ondulando verticalmente.
//   Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
//   if (Math.random() < 0.5) {
//     this.x -= this.velocidad;
//     this.y -= this.velocidad;
//   } else {
//     //Sino, hace otro movimiento
//     this.y += this.velocidad;
//     this.x -= this.velocidad;
//   }

//   /* En esta parte lo que hacemos es invertir la direccion horizontal si
//   toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
//   velocidad lo que estamos haciendo es invertir su direccion.*/
//   if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
//     this.velocidad *= -1;
//   }
//   // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
//   if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
//     this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
//   }
// }

// /* El ataque lo toma de su prototipo Enemigo que ya implementa un metodo atacar
// haciendole perder 1 vida al jugador. Si se quiere modificar el valor de ataque
// del zombie caminante habra que reimplementar este metodo desde el objeto ZombieCaminante

// ZombieConductor.prototype.atacar = function(jugador) {
//   ...
// }*/
