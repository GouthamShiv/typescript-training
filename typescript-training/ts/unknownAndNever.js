console.log('----------unknown-and-never----------');
// userInput is of type any, hence can be assigned with any value
var userInput;
userInput = 5;
userInput = 'John';
var userData;
var userName;
userData = 5;
userName = 'John';
// error - Type 'unknown' is not assignable to type 'string'.
// userName = userData;
// Since the compiler is aware, that when userData is of type String only then it's assigned to userName variable, there is no error
if (typeof userData === 'string') {
    userName = userData;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
var res = generateError('Invalid Page', 500);
console.log(res);
console.log('-------------------------------------');
