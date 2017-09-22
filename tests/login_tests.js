var util = require('util');

describe('testing login by eKool', function() {

	/*beforeEach(function() {
	    browser.get('https://oxygen.netgroupdigital.com/dev');
	});*/

	var home_page = require('../pageobjects/home_page.js');

	it('should login and show username', function() {

		home_page.get();

		var login_component = home_page.clickLogin();

		var ekool_page = login_component.loginWithEkool();
		ekool_page.setUsername("peeter.paan");
		ekool_page.setPassword("parool");
		ekool_page.enter();

		var home_page_loggedin = ekool_page.confirm();

		expect(home_page_loggedin.userIcon.isDisplayed()).toBe(true);

	});
});