/**
 *
 * @param {*} stringToHash
 * Hashing is irreversible.
 * The goal is to be able to obsfucate characters.
 * Secure hash function takes a salt and is used for
 * ensuring password security.
 * Reference : http://erlycoder.com/49/javascript-hash-functions-to-convert-string-into-integer-hash-
 */

// Simple hashing method using unicode and bitwise operators.
// This one can easily be broken.
const hashCode = str => {
  let hash = 0;
  if (!str || str.length === 0) return hash;
  str = [str];
  str.forEach((s, i) => {
    let char = s.charCodeAt(i); // Get unicode.
    // Effectively = hash * 32
    hash = (hash << 5) - hash + char;
    hash = hash * 165;
  });

  return hash;
};

module.exports = {
  hashCode
};
