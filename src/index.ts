// Começsndo com typescript

// Type anotations -> anotação de tipos
const myName: string = "Mário";

function sum(a: number, b: number): number {
  return a + b;
}

sum(12, 12);

function greet(name: string, age?: number, isProgrammer?: boolean) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

greet("Mário", 30);
