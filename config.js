    exports.config = {
        seleniumAddress: 'http://localhost:4444/wd/hub',
        capabilities: {
            'browserName': 'chrome'
        },
        framework: 'jasmine',
        specs: ['./tests/**/*.js'],
        jasmineNodeOpts: {
            defaultTimeoutInterval: 30000
        },
        onPrepare: function () {
            browser.manage().window().maximize();
            browser.manage().timeouts().implicitlyWait(10000);
        }
    };
    
    //How to run?
    //webdriver-manager start
    //protractor config.js