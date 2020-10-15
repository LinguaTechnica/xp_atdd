const { GetQuotePage } = require('./get_quote')

describe('Get Quote Feature', () => {
    let getQuotePage;

    describe('Given I am at the get quote page',()=> {
        beforeEach(() => {
            getQuotePage = new GetQuotePage();
        })
        describe('When I fill out my home address and service type', function () {
            it('Then I can see a price quote for the service I chose', function () {
                getQuotePage.serviceType = 'Home Insurance';
                getQuotePage.address = '123 Main Street';
                expect(getQuotePage.is_valid()).toBe(true);
            });
        });

        describe('When I leave my home address incomplete', function () {
            it('Then I see a message to provide it', function () {
                getQuotePage.serviceType = 'Home Insurance';
                expect(getQuotePage.is_valid()).toBe('Please provide your address.');
            });
        });

        // API Tests Example
        it('should send GET and return 200 OK', () => {
            expect(getQuotePage.response_status).toBe(200)
        });

        it.todo('should anonymize user location data')
    } )

})
