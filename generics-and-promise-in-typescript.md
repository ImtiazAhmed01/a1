# generics-and-promise-in-typescript

## Introduction
Generic programming is one of the core functionalities of TypeScript. It allows us to create reusable classes, functions, or interfaces that will operate on different data types. Instead of writing different code for each data type we can deal with them using generics.
## Detailed Discussion
We rely on a generic type parameter, which we call T, when we want to inform TypeScript that a certain function can process various data types.
For example
```typescript
function getValue<T>(value: T): T {
    return value;
}

getValue<number>(10);
getValue<string>("Hello");
```

If we use number in our function, for example, TypeScript recognizes that the type of return value is number as well. Generics are great when we need to perform asynchronous tasks using Promises. To put it simply, a Promise is a future value, and we indicate the type of value that will be returned by Promise<T> if the operation is completed successfully.
Like-
```typescript
function getUser(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Rakib");
        }, 1000);
    });
}
```
As in this case, when we mention the use of Promise<string>, we mean that this Promise will return a string. 
Generics can also be useful for developing functions that will be applied in APIs.
```typescript
function fetchData<T>(data: T): Promise<T> {
    return Promise.resolve(data);
}
```
At this point, the method supports various kinds of data while maintaining type safety.
## Conclusion
Generics allow TypeScript code to be reusable, flexible, and maintainable. They are particularly useful when processing API calls and data using Promises, as Promise<T> clarifies what kind of data developers will receive after the execution of an asynchronous method.