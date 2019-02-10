describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://angularjs.org/');   
      element(by.model('yourName')).sendKeys('Mustafa');
      var text_element = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));

      expect(text_element.getText()).toEqual('Hello Mustafa!')
      
    });
  });

describe('Free crm title test',function(){

    it('get title of the page', function() {


  browser.get('https://juliemr.github.io/protractor-demo/');
  expect(browser.getTitle()).toEqual('Super Calculator');
  element(by.model('first')).sendKeys('5');
  element(by.model('second')).sendKeys('5');
  element(by.id('gobutton')).click();


});


});










