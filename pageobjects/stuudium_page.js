require('../pageobjects/home_page_loggedin.js');

var stuudium_page = function() {
	
	var usernameStuudium = element(by.css('#username'));
	var passwordStuudium = element(by.css('#password'));
	var enterStuudium = element.all(by.css('div input[data-role="login-form-submit"]'));
	var confirmStuudium = element.all(by.css('form input[name="data[Authorize][allow]"]'));
	
	this.setUsernameStuudium = function(value) {
    	usernameStuudium.sendKeys(value);
	};
	
	this.setPasswordStuudium = function(value) {
    	passwordStuudium.sendKeys(value);
	};
	
	this.enterStuudium = function() {
    	enterStuudium.click();
	};
	

	this.confirmStuudium = function() {
    	confirmStuudium.click();
    	return require('../pageobjects/home_page_loggedin.js');
	};
}
module.exports = new stuudium_page();