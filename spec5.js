describe('multiple test blocks',function(){

  // Objects
  var firstnumber = element(by.model('first'));
  var secondnumber = element(by.model('second'));
  var gobutton = element(by.id('gobutton'));
  var result = element(by.className("ng-binding"));

  // executed after every block
  beforeEach(function(){
   
    browser.get('https://juliemr.github.io/protractor-demo/');

  });

  //TC 1
  it('get title of the page', function() {
    expect(browser.getTitle()).toEqual('Super Calculator');
 });

 // TC 2
 it('It should add two numbers', function() {

  firstnumber.sendKeys('45');
  secondnumber.sendKeys('67');
  gobutton.click();
  expect(result.getText()).toEqual('112') 

});

// TC 3
it('It should add two numbers', function() {

  firstnumber.sendKeys('5');
  expect(firstnumber.getAttribute('value')).toEqual('5');

});

});

 