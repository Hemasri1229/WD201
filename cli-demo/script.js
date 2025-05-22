const minimist = require('minimist');
const args=minimist(process.argv.slice(2));

const operation=args.operation;
const num1=parseInt(args.num1);
const num2=parseInt(args.num2);

if (operation === 'add') {
  console.log(`The result is: ${num1 + num2}`);
} else if (operation === 'subtract') {
  console.log(`The result is: ${num1 - num2}`);
} else if (operation === 'multiply') {
  console.log(`The result is: ${num1 * num2}`);
} else {
  console.log('Unknown operation');
}

console.log('args[0]:', args[0]);
console.log('args[1]:', args[1]);
console.log('args[2]:', args[2]);
console.log('args[3]:', args[3]);