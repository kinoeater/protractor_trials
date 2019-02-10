describe('Free crm title test',function(){

  it('get title of the page', function() {

    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:8080/camunda-welcome/index.html');
    expect(browser.getTitle()).toEqual('Welcome to the Camunda BPM Platform');
    browser.driver.sleep('3000');
    element(by.xpath('/html/body/div/div[1]/section/div/div[1]/a[2]/img')).click();
    browser.driver.sleep('3000');
    browser.waitForAngularEnabled(true);
    browser.driver.sleep('3000');
    element(by.model('username')).clear();
    browser.driver.sleep('3000');
    element(by.model('username')).sendKeys('mustafa');
  /*  browser.driver.sleep('3000');
    element(by.model('first')).sendKeys('45');
    browser.driver.sleep('3000');
    element(by.model('second')).sendKeys('67');
    browser.driver.sleep('3000');
    element(by.id('gobutton')).click();
    expect(element(by.xpath('/html/body/div/div/form/h2')).getText()).toEqual('112') */


});
});