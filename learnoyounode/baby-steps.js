let args = process.argv;
let count = args.length;
let sumOfInputs = 0;
// As process.argv contains the first arg as node, second one as file path, actual arguments start from index 2
for (let i = 2; i < count; i++) {
  // As arguments from process are string, converting it to number
  sumOfInputs += Number(args[i]);
}
console.log(sumOfInputs);