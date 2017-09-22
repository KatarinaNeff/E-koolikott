require('../components/login_component.js');

var home_page = function() {

	var login = element(by.css('#header-login-icon'));

	this.get = function() {
		browser.get('https://oxygen.netgroupdigital.com/dev');

	};

	this.clickLogin = function() {
		login.click();
		return require('../components/login_component.js');
	};

};
module.exports = new home_page();