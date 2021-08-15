# TypeScript Learning and Reference Material
---
---
### Installing TypeScript
---
> npm install -g typescript

---
---
### Project set-up
---
1. initialize node application ==> `npm init`
1. install lite-server ==> `npm install -g lite-server`
1. download node packages ==> `npm install`
1. to start application ==> `npm start`

---
---
### Compiling Typescript
---
> tsc <\<filename\>\>

---
---
### Datatypes
---
* **number | _javascript & typescript_**
    ```typescript
    let num1 = 1;
    let num2 = 1.5;
    let num3 = -10;
    ```
* **string | _javascript & typescript_**
    ```typescript
    let message1 = 'Hi';
    let message2 = "Hi";
    let message3 = `hi`;
    ```
* **boolean | _javascript & typescript_**
    ```typescript
    let isCat = true;
    ```
* **object | _javascript & typescript_**
    ```typescript
    let personObj: {
        name: string;
        age: number;
    } = {
        name: 'John',
        age: 30
    };
    ```
* **array | _javascript & typescript_**
    ```typescript
    let favourites: string[];
    favourites = ['music', 'chess', 'technology'];
    ```
* **tuple | _typescript_**

    `A tuple maintains order and will have a definite set of values`
    ```typescript
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
        // trying
        // role: ['Author', 2]
        // errors:
        // Type 'string' is not assignable to type 'number'.
        // Type 'number' is not assignable to type 'string'.
    };

    // personWithTuple.role.push('Admin'); // issue that TypeScript cannot understand `push`
    personWithTuple.role = [1, 'Admin']; // This is a better way, so TypeScript compiler can identify the issue
    ```
* **enum | _typescript_**
    ```typescript
    enum ROLES {
        ADMIN,
        AUTHOR,
        GUEST
    }

    let personWithEnum = {
        name: 'John',
        age: 30,
        hobbies: ['Music', 'Cooking'],
        role: ROLES.ADMIN
    };
    ```
* **any | _typescript_**

    `Bettter to avoid this as much as possible`
    ```typescript
    let array: any[] = [];
    array.push('test');
    array.push(20);

    console.log("Data in \"array: any[]\"");
    for (let data of array) {
        console.log(data);
    }
    ```
* **union | _typescript_**
    ```typescript
    function combine(input1: number | string, input2: number | string) {
        if (typeof input1 === 'number' && typeof input2 === 'number')
            return input1 + input2;
        else if (typeof input1 === 'string' && typeof input2 === 'string')
            return input1.toString() + input2.toString();
    };
    ```

---
---
### Type Assignment and Type Inference
---
```typescript
let firstNumber = 20; // automatically assigned to `number` type
firstNumber = 'Hi'; // will be an error, as the variable is already assigned to a `number` type

let name: string = 'MyName'; // explicitly assigned to `string` type
name = 1; // will be an error, as the variable is explicitly assigned to a `string` type
```

---
---
### Understanding `object`s in TypeScript
---
```typescript
//error scenario, as the person object is not declared
let personObj: object = {
    name: 'John',
    age: 30
};

console.log(personObj.name); // will not be able to access `name` variable

//to correct the above issue
let personObj: {
    name: string;
    age: number;
} = {
    name: 'John',
    age: 30
};

console.log(personObj.name);
```