require('../pageobjects/home_page_loggedin.js');

var ekool_page = function() {
	
	var username = element(by.css('#username'));
	var password = element(by.css('#password'));
	var enter = element(by.css('.button-submit'));
	
	this.setUsername = function(value) {
    	username.sendKeys(value);
	};
	
	this.setPassword = function(value) {
    	password.sendKeys(value);
	};
	
	this.enter = function() {
    	enter.click();
	};
	

	this.confirm = function() {
    	enter.click();
    	return require('../pageobjects/home_page_loggedin.js');
	};
}
module.exports = new ekool_page();