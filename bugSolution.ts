function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, parseInt('2', 10)); // Corrected: String converted to number using parseInt()
console.log(result); // Output: 3