'use-strict';

module.exports = class {
    save(appointment) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    update(id, date) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    delete(id) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    findAll() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
};
