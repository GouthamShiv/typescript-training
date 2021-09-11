# **TypeScript Learning and Reference Material**
---
---
### **Installing TypeScript**
---
> npm install -g typescript

---
---
### **Compiling Typescript**
---
```bash
tsc filename.ts
# to compile in watch mode (automatic compilation)
tsc filename.ts --watch
tsc filename.ts -w
```

---
---
### **Initialize TypeScript to compile multiple _.ts_ files**
---
```bash
cd /path/to/project
tsc --init
# after initializing, we can run below command
tsc --watch
# or
tsc -w
```

---
---
### **Project set-up**
---
1. initialize node application ==> `npm init`
1. install lite-server ==> `npm install -g lite-server`
1. download node packages ==> `npm install`
1. to start application ==> `npm start`

---
---
### **Datatypes** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/main.ts)
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
* **object | _javascript & typescript_** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/objects.ts)
    ```typescript
    let personObj: {
        name: string;
        age: number;
    } = {
        name: 'John',
        age: 30
    };
    ```
* **array | _javascript & typescript_** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/array.ts)
    ```typescript
    let favourites: string[];
    favourites = ['music', 'chess', 'technology'];
    ```
* **tuple | _typescript_** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/tuple.ts)

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
* **enum | _typescript_** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/enum.ts)
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
* **any | _typescript_** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/any.ts)

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
* **union | _typescript_** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/union.ts)
    ```typescript
    function combine(input1: number | string, input2: number | string) {
        if (typeof input1 === 'number' && typeof input2 === 'number')
            return input1 + input2;
        else if (typeof input1 === 'string' && typeof input2 === 'string')
            return input1.toString() + input2.toString();
    };
    let inputN1 = 4;
    let inputN2 = 3;
    console.log("Sum of " + inputN1 + " and " + inputN2 + " is: " + combine(inputN1, inputN2));

    let inputS1 = 'Solar ';
    let inputS2 = 'System';
    console.log("Concatination of " + inputS1 + "and " + inputS2 + " is: " + combine(inputS1, inputS2));
    ```
* **literal | _typescript_** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/literal.ts)
    ```typescript
    // function combineLiteral(input1: number | string, input2: number | string, resultType: 'as-number' | 'as-string') {
    
    function combineLiteral(input1: number | string, input2: number | string, resultType: String) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number')
        result = input1 + input2;
    else if (typeof input1 === 'string' && typeof input2 === 'string')
        result = input1.toString() + input2.toString();

    if(resultType === 'as-number')
        return +result;
    else
        return result.toString();
    
    };

    console.log("Combin 4 and 6 as-string: " + combineLiteral(4, 6, 'as-string'));
    console.log("Combin '4' and '6' as-number: " + combineLiteral('4', '6', 'as-number'));

    // enum RETURN_TYPE {
    // AS_NUMBER = 'as-number',
    // AS_STRING = 'as-string'
    // }
    // function combineLiteral(input1: number | string, input2: number | string, resultType: RETURN_TYPE) {
    // ...
    // }
    // console.log("Combin 4 and 6 as-string: " + combineLiteral(4, 6, RETURN_TYPE.AS_STRING));
    // console.log("Combin '4' and '6' as-number: " + combineLiteral('4', '6', RETURN_TYPE.AS_NUMBER));
    ```

---
---
### **Type Assignment and Type Inference** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/main.ts)
---
```typescript
let firstNumber = 20; // automatically assigned to `number` type
firstNumber = 'Hi'; // will be an error, as the variable is already assigned to a `number` type

let name: string = 'MyName'; // explicitly assigned to `string` type
name = 1; // will be an error, as the variable is explicitly assigned to a `string` type
```

---
---
### **Understanding `object`s in TypeScript** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/objects.ts)
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

---
---
### **Return Types and void** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/returnType.ts)
---
```typescript
function returnType(input1: number, input2: number): number {
    // return input1.toString() + input2.toString(); // error - return type has to be number
    return input1 + input2;
};

// void return-type as it's not returning anything
function printResult(value: number): void {
    console.log('Result: ' + value);
}

// can also mention undefined, but return keyword is mandatory
function printResult(value: number): undefined {
    console.log('Result: ' + value);
    return;
}

printResult(returnType(4,3));

console.log(printResult(returnType(4,3)));
```

---
---
### **Functions as Types** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/functionType.ts)
---
`Typescript allows to assign functions to variables`

`If the variable getting assigned to a function is not explicitly declared as `**`Function  `**` type, then it'll be considered as  `**` any  `**` by default`
```typescript
function functionType(input1: number, input2: number): number {
    return input1 + input2;
};
// declaring variable with function type
// let functionVar: Function;

// declaring variable with function type along with signature
let functionVar: (a:number, b:number) => number;
functionVar = functionType;

console.log(functionVar(4,3));

```

---
---
### **_Unknown_ and _Never_ Types** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/unknownAndNever.ts)
---
* **understanding _unknown_**

    **`userInput  `** ` is of type  ` **`  any`**`, hence can be assigned with any value`
    ```typescript
    let userInput;
    userInput = 5;
    userInput = 'John';
    ```

    `directly trying to assign ` **` unknown  `** ` type to other types will throw an error`

    `instead, we can assign ` **` unknown  `** ` types to other types by doing a check as below`
    ```typescript
    let userData: unknown;
    let userName: string;

    userData = 5;
    userName  = 'John'

    // error - Type 'unknown' is not assignable to type 'string'.
    // userName = userData;

    // Since the compiler is aware, that when userData is of type String only then it's assigned to userName variable, there is no error
    if (typeof userData === 'string') {
        userName = userData;
    }
    ```
* **understanding _never_**

    `similar to  ` **`  void  `** `  but  ` **`  void  `** `  still returns  `  **`  undefined `**

    **`never  `** `  will not be returning any value, not even  ` **`  undefined`**

    ```typescript
    function generateError(message: string, code: number): never {
        throw{message, code};
    }
    ```

---
---
### **Understanding _`tsconfig.json`_** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/tsconfig.json)
---

* Excluding folders / files from getting compiled by TypeScript compiler
    * > "exclude": ["node_modules"]
* Including folders / files for getting compiled by TypeScript compiler
    * > "include": ["ts/*"]
* Specify specific `  files  ` to get compiled by TypeScript compiler
    * > "files": [""ts/main.ts]
* Specify the `  target  ` format
    * > "target": "ES5"
* Specify specific libraries to include
    * > "lib": ["DOM", "DOM.Iterable", "ScriptHost", "ES6"]

---
---
### **_`class(es)`_ and more in TypeScript** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/classExample.ts)
---

* `Sample way to declare a class in TypeScript`
    ```typescript
    class Department {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
    }
    ```
* `Methods in class`
    ```typescript
    ...
        methodName() {
            ...
            ...
        }
    ...
    ```
* `Making methods to belong to a class`
    ```typescript
    class Department {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        describe(this: Department) {
            console.log("Department is :: " + this.name);
        }

    }

    let accDept = new Department("Accounting");
    accDept.describe();
    console.log(accDept);

    /*let accDeptCopy = { describe: accDept.describe }
    accDeptCopy.describe(); // error :: The 'this' context of type '{ describe: (this: Department) => void; }' is not assignable to method's 'this' of type 'Department'.
                            // Property 'name' is missing in type '{ describe: (this: Department) => void; }' but required in type 'Department'.
    }*/
    // to fix above issue
    let accDeptCopy = { name: 'Sales', describe: accDept.describe }
    accDeptCopy.describe();
    console.log(accDeptCopy);

    // OR

    let anotherAccDeptCopy = { describe: accDept.describe }
    anotherAccDeptCopy.describe.bind(accDept)();
    console.log(anotherAccDeptCopy);
    ```

---
---
### **Access modifiers in TypeScript classes**
---

* `Making variables accessible within the class` [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/accessModifiers.ts)
    ```javascript
    class Dept {
        name: string;
        private employees: string[] = [];

        constructor(name: string) {
            this.name = name;
        }

        describe(this: Dept) {
            console.log("Department is :: " + this.name);
        }

        addEmployee(employee: string) {
            this.employees.push(employee);
        }

        printEmployees() {
            console.log(this.employees.length);
            console.log(this.employees);
        }

    }

    let dept = new Dept("Accounting");
    dept.addEmployee('John');
    dept.addEmployee('Wick');

    dept.employees[2] = 'Don'; // error :: Property 'employees' is private and only accessible within class 'Dept'.
    ```

* `Shorthand access modifier` [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/shorthandAccessModifier.ts)
    
    `TypeScript allows the declaration of variables in the constructor along with access-modifier specifier`

    ```typescript
    ...
        constructor(private id: number, public name: string) {
            ...
        }
    ...
    ```

* _`readonly`_ [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/readonlyAccessModifier.ts)

    `to make sure once a value is assigned, it is not modifiable`

    ```typescript
    ...
        constructor(private readonly id: number, public name: string) {
            ...
        }
        ...
        this.id = 50; // error :: Cannot assign to 'id' because it is a read-only property.
        ...
    ...
    ```

---
---
### **Inheritance in TypeScript** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/inheritance.ts)
---

`TypeScript allows to extend a class, providing the inheritance feature`

```typescript
...
...
class Department {
    ...
    ...
}
...
...
class Accounts extends Department {
    ...
    ...
}
...
...
class IT extends Department {
    ...
    ...
}
...
...
```

---
---
### **Overriding and Protected access-modifier in TypeScript** [example](https://github.com/GouthamShiv/typescript-training/blob/master/typescript-training/ts/overriding.ts)
---

* Overriding methods from base class

    `using ` **` super `** ` keyword, we can access base class methods`

    ```typescript
    ...
    ...
    class Department {
        ...
        ...
        addEmployee(name: string) {
            ...
            ...
        }
        ...
        ...
    }
    ...
    ...
    class Accounts extends Department {
        ...
        ...
        super.addEmployee("Smith");
        ...
        ...
    }
    ...
    ...
    ```

* **protected** keyword

    **`protected `** ` keyword allows the inherited class to access the properties of the base class`

    ```typescript
    ...
    ...
    class Department {
        ...
        ...
        private id: string;
        protected name: string;
        ...
        ...
    }
    ...
    ...
    class Accounts extends Department {
        ...
        ...
        this.id = 'A01' // error :: Property 'id' is private and only accessible within class 'Department'.
        this.name = 'Accounts' // valid
        ...
        ...
    }
    ...
    ...
    ```