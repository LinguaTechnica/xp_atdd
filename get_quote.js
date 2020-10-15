class GetQuotePage {
    constructor() {
        this.serviceType = null;
        this.address = null;
    }

    is_valid() {
        if (!this.address && this.serviceType) {
            return 'Please provide your address.'
        } else if (!this.serviceType && this.address) {
            return 'Please select a service.'
        }
        return this.serviceType && this.address !== null;
    }
}

module.exports = { GetQuotePage };