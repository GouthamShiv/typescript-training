console.log('-------------tuple-------------');

let personWithTuple: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
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
console.log('Role Tuple:')
for(let role of personWithTuple.role) {
    console.log(role);
}

console.log('-------------------------------');