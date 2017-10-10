require('../pageobjects/edit_portfolio_page.js')

var add_portfolio = function() {
	
	/*set EC*/
	
	var EC = protractor.ExpectedConditions;

	/*set faker*/
	
	var faker = require('faker');
	var randomTitle = faker.lorem.words();
	
	/*set title */
	var title = element(by.css('#add-portfolio-title-input'));
	
	/*set upload file*/
	var path = require('path');
	var fileToUpload = 'c:/files/cateyes.jpg';
	var absolutePath = path.resolve(fileToUpload);
    var input = element(by.css('input[type="file"]'));

	/*set education*/
    var education = element.all(by.css('#taxonEducationalSelect')).last();
    var preschool = element.all(by.css("md-option[data-translate='PRESCHOOLEDUCATION']")).last();
    
    /*set taxon*/
    
    var taxon = element.all(by.css('div md-select[id="taxonDomainSelect"]')).last();
    var estonian = element(by.css('div md-option[data-translate="DOMAIN_ESTONIAN"]'));
    var closeBtn = element.all(by.css('div button[data-ng-click="closeSelect()"]')).last();
    
    /*set target group*/
    var target = element.all(by.css('div md-select[aria-label="Vanuse valiku menüü"]')).last();
    var zeroFive = element.all(by.css('div md-option[value="ZERO_FIVE"]')).last();
    
    
    /*create btn*/
    var createBtn = element.all(by.css('button[aria-label="Loo kogumik"]'));
    
	this.setTitle = function() {
    	title.sendKeys(randomTitle);
	};
	
	this.uploadFile = function() {
		input.sendKeys(absolutePath);			
	};
	
	this.selectEducation = function() {
		browser.wait(EC.visibilityOf(education), 5000);
		education.click();	
	};
	
	this.selectPreschoolEducation = function() {
		browser.wait(EC.visibilityOf(preschool), 5000);
		preschool.click();
		
	};
	
	this.selectTaxon = function() {
		browser.wait(EC.visibilityOf(taxon), 5000);
		taxon.click();
	    estonian.click();
	  
		
	};
	
	this.selectTargetGroup = function() {
		browser.wait(EC.visibilityOf(target), 5000);
		target.click();
		zeroFive.click();
		browser.wait(EC.visibilityOf(closeBtn), 5000);
		closeBtn.click();
		browser.sleep(100);
		
	};
	
	
	this.createPortfolio = function() {
		createBtn.click();
    	return require('../pageobjects/edit_portfolio_page.js');
	};
}
module.exports = new add_portfolio();