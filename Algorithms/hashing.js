/**
 *
 * @param {*} stringToHash
 * Hashing is irreversible.
 * The goal is to be able to obsfucate characters.
 * Secure hash function takes a salt and is used for
 * ensuring password security.
 */

// This is more of encoding/ decoding
const simpleEncoding = stringToHash => {
  return Buffer.from(stringToHash).toString("base64");
};

const simpleDecoding = hashed => {
  return new Buffer.from(hashed, "base64").toString("ascii");
};

module.exports = {
  simpleEncoding,
  simpleDecoding
};
