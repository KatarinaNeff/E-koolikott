require('../components/login_component.js');
require('../components/add_portfolio.js');

var home_page = function() {

	var login = element(by.css('#header-login-icon'));
	var createPortfolioBtn = element(by.css('#add-portfolio'));
	

	this.get = function(url) {
	browser.get(url);
	
	};

	this.clickLogin = function() {
		login.click();
		return require('../components/login_component.js');
	};
	
	this.createNewPortfolio = function() {
		createPortfolioBtn.click();
		return require('../components/add_portfolio.js');
	};

};
module.exports = new home_page();