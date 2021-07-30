'use-strict';

module.exports = class {
  save(client) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  delete(email) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  findByEmail(email) {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }

  findAll() {
    throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
  }
};
