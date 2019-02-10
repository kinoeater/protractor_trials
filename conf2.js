exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec6.js'],
    multiCapabilities:[{
      browserName: 'firefox'
},
{
      browserName: 'chrome'
}
] 
  };