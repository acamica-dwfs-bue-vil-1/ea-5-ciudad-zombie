class Amigo extends Enemigo {
  constructor(x, y, primerAtaque){
    super('imagenes/acamica.svg', x, y, 20, 20, 0, {desdeX: 0, hastaX: 961, desdeY: 0, hastaY: 577});
    this.primerAtaque = true;          
  }
  mover () {
    return;
  }
  atacar (jugador) {
    if (jugador.vidas < 5 && this.primerAtaque === true) {
    jugador.perderVidas(-1); 
    this.primerAtaque = false; 
    document.getElementById('life').currentTime = 0;        
    document.getElementById('life').play();        
    }
  }
}