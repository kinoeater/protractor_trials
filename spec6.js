describe('get list of elements',function(){

  // Objects
  var firstnumber = element(by.model('first'));
  var secondnumber = element(by.model('second'));
  var gobutton = element(by.id('gobutton'));
  var result = element(by.className('ng-binding'));
  var history = element.all(by.repeater('result in memory'));

  // executed after every block
  beforeEach(function(){
   
    browser.get('https://juliemr.github.io/protractor-demo/');

  });

  function add(a,b) {
    firstnumber.sendKeys(a);
    secondnumber.sendKeys(a);
    gobutton.click();

  }

  it('Check the history', function(){

      add(4,6);
      add(44,36);
      add(3,654);
      add(45,77);
      expect(history.count()).toEqual(4);


  });

  

});

 