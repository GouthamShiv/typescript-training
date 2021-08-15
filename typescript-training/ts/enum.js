console.log('---------------enum---------------');
var ROLES;
(function (ROLES) {
    ROLES[ROLES["ADMIN"] = 0] = "ADMIN";
    ROLES[ROLES["AUTHOR"] = 1] = "AUTHOR";
    ROLES[ROLES["GUEST"] = 2] = "GUEST";
})(ROLES || (ROLES = {}));
var personWithEnum = {
    name: 'John',
    age: 30,
    hobbies: ['Music', 'Cooking'],
    role: ROLES.ADMIN
};
if (personWithEnum.role === ROLES.ADMIN)
    console.log('User is ADMIN');
console.log('----------------------------------');
