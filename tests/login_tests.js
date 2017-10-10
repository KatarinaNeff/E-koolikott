

describe('testing login with eKool', function() {

	var home_page = require('../pageobjects/home_page.js');

	it('should login as eKool user', function() {

		home_page.get("https://oxygen.netgroupdigital.com/dev");

		var login_component = home_page.clickLogin();

		var ekool_page = login_component.loginWithEkool();
		ekool_page.setUsername("peeter.paan");
		ekool_page.setPassword("parool");
		ekool_page.enter();

		var home_page_loggedin = ekool_page.confirm();

		expect(home_page_loggedin.userIcon.isDisplayed());

	});

});

//add "f" to "describe" for single test running

fdescribe('testing login with Stuudium', function() {

	var home_page = require('../pageobjects/home_page.js');

	it('should login as Stuudium user', function() {

		home_page.get("https://oxygen.netgroupdigital.com/dev");

		var login_component = home_page.clickLogin();

		var stuudium_page = login_component.loginWithStuudium();
		stuudium_page.setUsernameStuudium("Netgroup Test Kaks");
		stuudium_page.setPasswordStuudium("meie teine saladus");
		stuudium_page.enterStuudium();

		var home_page_loggedin = stuudium_page.confirmStuudium();

		expect(home_page_loggedin.userIcon.isDisplayed());

	});
});

afterEach(function() {
	
	    browser.executeScript('window.sessionStorage.clear();');
	    browser.executeScript('window.localStorage.clear();');
});


