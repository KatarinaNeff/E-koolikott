    exports.config = {
        seleniumAddress: 'http://localhost:4444/wd/hub',
        capabilities: {
            'browserName': 'chrome',
            //'chromeOptions': {
               // 'args': ['show-fps-counter=true']
             // }
        },
        framework: 'jasmine',
        directConnect: true, // applies only to chrome and firefox.
        //specs: ['./tests/login_tests.js', './tests/publishe_tests.js'],
        specs: ['./tests/publisher_tests.js'],
        jasmineNodeOpts: {
            defaultTimeoutInterval: 30000,
            showColors: true
        },
        onPrepare: function () {
            browser.manage().window().setSize(1000, 1024);
        }
  
            
    };
    
    /*How to run?
    protractor config.js */
    
   
    