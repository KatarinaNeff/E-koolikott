require('../pageobjects/ekool_page.js');
require('../pageobjects/stuudium_page.js');

var login_component = function() {

	var eKoolBtn = element(by.css('#login-ekool-button'));
	var stuudiumBtn = element(by.css('#login-stuudium-button'));
	

	
	this.loginWithEkool = function() {
		eKoolBtn.click();
		browser.ignoreSynchronization = true;
		return require('../pageobjects/ekool_page.js');
	};
	
	this.loginWithStuudium = function() {
		browser.executeScript("arguments[0].scrollIntoView();", stuudiumBtn.getWebElement());
		stuudiumBtn.click();
		browser.ignoreSynchronization = true;
		return require('../pageobjects/stuudium_page.js');
	};
	
}
 module.exports = new login_component();
