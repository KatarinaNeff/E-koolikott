    exports.config = {
        seleniumAddress: 'http://localhost:4444/wd/hub',
        capabilities: {
            'browserName': 'chrome',
            'chromeOptions': {'args': ['--disable-extensions --disable-web-security --disk-cache-size=1 --media-cache-size=1']}
        },
        framework: 'jasmine',
        directConnect: true, 
        //specs: ['./tests/login_tests.js', './tests/log_in.js'],
        specs: ['./tests/login_tests.js'],
        jasmineNodeOpts: {
            defaultTimeoutInterval: 30000
        },
        onPrepare: function () {
            browser.manage().window().setSize(1600, 1024);
            //browser.manage().window().setSize(1920, 1080);
            browser.manage().timeouts().implicitlyWait(10000);
        }
    };
    
    //How to run?
    //webdriver-manager start
    //protractor config.js