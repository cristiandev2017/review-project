'use-strict';

module.exports = class {
    save(service) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    update(id, service) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    delete(name) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findByName(name) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findAll() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
};
