const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { GetQuotePage } = require('../../get_quote')


Given('I am at the get quote page', function () {
    // Write code here that turns the phrase above into concrete actions
    this.getQuotePage = new GetQuotePage();
});

When('I fill out my home address and the type of service I’m requesting', function () {
    // Write code here that turns the phrase above into concrete actions
    this.getQuotePage.serviceType = 'Home Insurance';
    this.getQuotePage.address = '123 Main Street'
});

Then('I can see a price quote for the service I chose.', function () {
    // Write code here that turns the phrase above into concrete actions
    assert.strictEqual(this.getQuotePage.is_valid(), true)
});

Given('I select the service type', function () {
    this.getQuotePage = new GetQuotePage();
    this.getQuotePage.serviceType = 'Home Insurance';

});

When('I leave my home address blank', function () {
    this.getQuotePage.address = null;
});

Then('I see a message to provide my home address', function () {
    let errMessage = this.getQuotePage.is_valid();
    assert.strictEqual(errMessage, 'Please provide your address.')
});
