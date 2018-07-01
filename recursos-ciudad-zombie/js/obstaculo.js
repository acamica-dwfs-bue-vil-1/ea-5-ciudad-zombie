/* Un objeto que representa a los obstaculos. Recibe un sprite que tendra la
imagen que lo representa y una potencia indicando cuando danio hace al chocar
al jugador, ademas de los parametros comunes x, y, ancho y alto*/
class Obstaculo { 
  constructor (sprite, x, y, ancho, alto, potencia, primerChoque) {
    this.sprite = sprite;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.potencia = potencia;
    this.primerChoque = true;
  }
  // Implementar el metodo chocar(jugador) para que al chocar con un obstaculo
  // el jugador pierda vidas

  chocar (jugador) {
    if (this.primerChoque) {
      jugador.vidas -= this.potencia;
      this.primerChoque = false;
    document.getElementById('crash').currentTime = 0;      
    document.getElementById('crash').play();      
    }
  }
}

class VallaHorizontal extends Obstaculo {
    constructor (x, y) {
    super('imagenes/valla_horizontal.png', x, y, 30, 30, 1)
  }
}

class VallaVertical extends Obstaculo {
    constructor (x, y) {
    super('imagenes/valla_vertical.png', x, y, 30, 30, 1)
  }
}

class Bache extends Obstaculo {
    constructor (x, y) {
    super('imagenes/bache.png', x, y, 30, 30, 2)
  }
}

class AutoVerdeAbajo extends Obstaculo {
    constructor (x, y) {
    super('imagenes/auto_verde_abajo.png', x, y, 15, 30, 3)
  }
}

class AutoVerdeDerecha extends Obstaculo {
    constructor (x, y) {
    super('imagenes/auto_verde_derecha.png', x, y, 30, 15, 3)
  }
}