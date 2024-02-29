export {};

// EXAMPLE 1 - Prefix unused function parameters with an underscore

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function logMessage(_message: string) {
  console.log('bobbyhadz.com');
}

console.log(logMessage);

// ---------------------------------------------------

// // EXAMPLE 2 - Using a `@ts-ignore` comment to silence the error

// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// function logMessage(message: string) {
//   console.log('bobbyhadz.com');
// }

// console.log(logMessage);
