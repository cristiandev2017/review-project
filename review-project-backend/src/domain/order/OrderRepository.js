'use-strict';

module.exports = class {
    save(order) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    delete(id) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findAll() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findAllByClientId(clientId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
};
