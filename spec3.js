describe('Free crm title test',function(){

  it('get title of the page', function() {


    browser.get('https://juliemr.github.io/protractor-demo/');
    expect(browser.getTitle()).toEqual('Super Calculator');
    browser.driver.sleep('3000');
    element(by.model('first')).sendKeys('45');
    browser.driver.sleep('3000');
    element(by.model('second')).sendKeys('67');
    browser.driver.sleep('3000');
    element(by.id('gobutton')).click();
   // expect(element(by.xpath('/html/body/div/div/form/h2')).getText()).toEqual('112')

    expect(element(by.className("ng-binding")).getText()).toEqual('112')


});
});