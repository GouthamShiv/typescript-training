console.log('-------------tuple-------------');
var personWithTuple = {
    name: 'John',
    age: 30,
    hobbies: ['Music', 'Cooking'],
    role: [2, 'Author']
    // role: ['Author', 2]
    // errors:
    // Type 'string' is not assignable to type 'number'.
    // Type 'number' is not assignable to type 'string'.
};
// personWithTuple.role.push('Admin'); // issue that TypeScript cannot understand `push`
personWithTuple.role = [1, 'Admin']; // This is a better way, so TypeScript compiler can identify the issue
console.log('Role Tuple:');
for (var _i = 0, _a = personWithTuple.role; _i < _a.length; _i++) {
    var role = _a[_i];
    console.log(role);
}
console.log('-------------------------------');
