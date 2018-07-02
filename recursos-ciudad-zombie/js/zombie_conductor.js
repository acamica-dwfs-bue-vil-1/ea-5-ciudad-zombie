/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

class ZombieConductorHorizontal extends Enemigo {
  constructor (velocidad) {
    super('imagenes/tren_horizontal.png', 400, 322, 90, 30, velocidad, {desdeX: 0, hastaX: 871});
  }
  mover () {
      this.x -= this.velocidad;
    /* En esta parte lo que hacemos es invertir la direccion horizontal si
    toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
    velocidad lo que estamos haciendo es invertir su direccion.*/
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
      this.velocidad *= -1;
    }
  }
  atacar (jugador) {
    jugador.perderVidas(5);  
    document.getElementById('crash').currentTime = 0;                  
    document.getElementById('crash').play();                  
  }
}

class ZombieConductorVertical extends Enemigo {
  constructor (x, velocidad) {
    super('imagenes/tren_vertical.png', x, 0, 30, 90, velocidad, {desdeY: 0, hastaY: 487});
  }
  mover () {
      this.y += this.velocidad;
    /* En esta parte lo que hacemos es invertir la direccion horizontal si
    toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
    velocidad lo que estamos haciendo es invertir su direccion.*/
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
      this.velocidad *= -1;
    }
  }
  atacar (jugador) {
    jugador.perderVidas(5);    
  }
}
