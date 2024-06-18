// Q 1. How do you decode pr encode a URL in JavaScript ?
// ANs: encodeURI() function is used to encode an URL. This function requires a URL string as a parameter and return that encoded string. decodeURI() function is used to decode an URL. This function requires an encoded URL string as parameter and return that decoded string.

let uri = 'employeeDetails?name=john&occupation=manager';
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);
console.log(encoded_uri);
// console.log(decoded_uri);
