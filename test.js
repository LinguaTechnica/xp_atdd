const { GetQuotePage } = require('./get_quote');

const Given = (desc, callback) => {
    return describe(desc, callback)
}
const When = (desc, callback) => {
    return describe(desc, callback)
}
const Then = (desc, callback) => {
    return it(desc, callback)
}

describe('Get Quote Feature', () => {
    let getQuotePage;

    Given('Given I am at the get quote page',()=> {
        beforeEach(() => {
            getQuotePage = new GetQuotePage();
        })
        When('When I fill out my home address and service type', () => {
            Then('Then I can see a price quote for the service I chose',  () => {
                getQuotePage.serviceType = 'Home Insurance';
                getQuotePage.address = '123 Main Street';
                expect(getQuotePage.isValid()).toBe(true);
            });
        });

        When('When I select a service and leave my home address incomplete',  () => {
            Then('Then I see a message to provide my home address',  () => {
                getQuotePage.serviceType = 'Home Insurance';
                expect(getQuotePage.isValid()).toBe(false);
                expect(getQuotePage.getResponse()).toEqual('Please provide your address.')
            });
        });

        // API Tests Examples
        it.todo('should POST to /getQuote and return 200 OK');
        it.todo('should anonymize user location data')
    } )

})
