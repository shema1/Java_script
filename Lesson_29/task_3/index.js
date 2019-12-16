  export const mult = a => b => a * b;

  export function twice(b) {
      return mult(2)(b);
  };

  export function triple(b) {
      return mult(3)(b);
  }