require('../pageobjects/ekool_page.js');

var login_component = function() {

	var eKoolBtn = element(by.css('#login-ekool-button'));
	

	
	this.loginWithEkool = function() {
		eKoolBtn.click();
		browser.ignoreSynchronization = true;
		browser.waitForAngular();
		return require('../pageobjects/ekool_page.js');
	};
	
}
 module.exports = new login_component();