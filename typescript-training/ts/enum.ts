console.log('---------------enum---------------');

enum ROLES {
    ADMIN,
    AUTHOR,
    GUEST
}

let personWithEnum =  {
    name: 'John',
    age: 30,
    hobbies: ['Music', 'Cooking'],
    role: ROLES.ADMIN
};

if(personWithEnum.role === ROLES.ADMIN)
    console.log('User is ADMIN');
console.log('----------------------------------');