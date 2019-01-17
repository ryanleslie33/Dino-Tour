import { DinoTour } from './../src/dino-park.js';



describe('DinoTour', function() {
  let tour1;
  let tour2;
   let trex;

  beforeEach(function() {
    tour1 = new DinoTour();

    tour2 = new DinoTour();

  });
  it("test whether a touris will get eatin when COD is greater than 20", function() {
    tour1.cod = 21;
    tour1.attack();
    expect(tour1.tourStatus).toEqual("dead");
  });
  it("test wheather ", function() {
    tour2.cod = 1;
    tour2.visit();
    expect(tour2.cod).toEqual(2);
  });


});
