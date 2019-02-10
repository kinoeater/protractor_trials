import { element } from "protractor";

describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://juliemr.github.io/protractor-demo/');   
      element(by.model('first')).sendKeys('5');
      element(by.model('second')).sendKeys('5');
      element(by.id('gobutton')).click();
      waitsFor(5000);
    
    });
  });