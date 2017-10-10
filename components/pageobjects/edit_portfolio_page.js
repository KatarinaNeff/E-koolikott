require('../pageobjects/view_portfolio_page.js');

var edit_portfolio_page = function() {
	
	var save = element(by.css('button[data-ng-click="saveAndExitPortfolio()'));
	var closeTourBtn = element(by.css('button[aria-label="Close tour'));
	var makePublic = element.all(by.css('button[data-ng-click="dialog.hide()'));
	var EC = protractor.ExpectedConditions;
	
	this.saveAndExit = function() {
		browser.executeScript("arguments[0].scrollIntoView();", save.getWebElement());
		save.click();
    	
	};
	
	this.makePublic = function() {
		makePublic.click();
    	return require('../pageobjects/view_portfolio_page.js');
	};
	
}
module.exports = new edit_portfolio_page();