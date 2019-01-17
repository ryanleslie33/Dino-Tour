export class DinoTour {
  constructor() {
    this.dinosaur = this.dinosaur;
    this.cod = 1;
    this.tourStatus = "alive";
  }

danger(){
  let badLuck = this.cod;
  let attack = Math.random() * 100;
  if (attack < (10 * badLuck)){
    console.log (attack + "oh no something went wrong the dinosaurs got out and attacked, you and your tour party are now dead.")
    this.tourStatus = "dead"
  } else {
    console.log("wow these dinosaurs are really neat, glad nothing bad happened.")
  }
}

visit(){
  this.dinosaur = this.dinosaur;
  this.danger();
  this.cod += 1
  this.trexAttack();
  this.tourCheck();
}

tourCheck(){
if (this.tourStatus === "dead"){
  console.log("It looks as if your tour has ended, lets check on some other tourists?")
  this.cod = 1;
  this.tourStatus = "alive"
  }
}
feedDino(){
  this.cod +=5
}
trexAttack() {
  let trex = Math.random() * 100;
  if (trex < 5) {
    console.log("OH NO the t-rex has escaped and ate you")
    this.tourStatus = "dead";
  }
}
  attack() {
    if ( this.cod > 20){
      console.log("the dinosaur pulled you into the cage and ate you instead")
    }
  }

}
