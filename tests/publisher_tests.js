describe('create portfolio as publisher', function() {

	var home_page = require('../pageobjects/home_page.js');

	it('should create portfolio as publisher', function() {

		home_page.get("https://oxygen.netgroupdigital.com/dev/login/12345678900");

		var add_portfolio = home_page.createNewPortfolio();

		add_portfolio.uploadFile();
		add_portfolio.setTitle();
		add_portfolio.selectEducation();
		add_portfolio.selectPreschoolEducation();
		add_portfolio.selectTaxon();
		add_portfolio.selectTargetGroup();
		add_portfolio.createPortfolio();
		
		var edit_portfolio_page = add_portfolio.createPortfolio();
		edit_portfolio_page.saveAndExit();
		
		var view_portfolio_page = edit_portfolio_page.makePublic();
		
		expect(view_portfolio_page.creator.getText()).toEqual("Publisher");
		
	});

	});