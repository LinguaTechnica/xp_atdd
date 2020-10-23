class GetQuotePage {
    constructor() {
        this.serviceType = null;
        this.address = null;
    }

    isValid() {
        return this.serviceType && this.address !== null;
    }

    getResponse() {
        if (!this.address && this.serviceType) {
            return 'Please provide your address.'
        } else if (!this.serviceType && this.address) {
            return 'Please select a service.'
        }
    }
}

module.exports = { GetQuotePage };