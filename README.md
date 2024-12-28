# TypeScript Type Error: String passed to Number parameter

This repository demonstrates a common type error in TypeScript: passing a string argument to a function expecting a number.

## Bug Description
The `add` function is defined to accept two number parameters. However, in the usage example, the second argument is a string ('2'). TypeScript correctly identifies this type mismatch, preventing runtime errors.

## Solution
The solution involves ensuring that the type of the argument matches the type expected by the function. This can be done by explicitly converting the string argument to a number using `parseInt()` before passing it to the function.

## How to reproduce

1. Clone this repository.
2. Compile using the TypeScript compiler: `tsc bug.ts`
3. Observe that compilation fails due to the type error.  Compile `bugSolution.ts` to see the corrected version.
