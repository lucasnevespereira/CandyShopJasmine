describe("CandyShop", function(){

  let chamallow;
  let dragibus;

  beforeEach(function(){
    chamallow = new chamallowBox();
    dragibus = new dragibusBox();
  });

  function customerTakes(candies){
    chamallow.quantity -= candies;
  };

  function employeeAdds(candies){
    dragibus.quantity += candies;
  };

  // Retire 20 bonbons d'une boite de 510, il devait rester 490.
  it("should retrieve chamallows from box ", function(){
    customerTakes(20);
    expect(chamallow.quantity).toEqual(490);
  });

  // Ajoute 600 bonbons d'une boite de 4, il devait rester 604.
  it("should add dragibus to box", function(){
    employeeAdds(600);
    expect(dragibus.quantity).toEqual(604);
  });

})