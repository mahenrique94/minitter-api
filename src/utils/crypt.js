const crypto = require('crypto')

const HASH_ALGORITHM = 'sha256'

module.exports = {
    encrypt: s =>
        crypto
            .createHash(HASH_ALGORITHM)
            .update(s)
            .digest('hex')
}
