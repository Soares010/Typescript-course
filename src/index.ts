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

// ///////////////////

const filter = (value: number) => value < 0;

const numbers = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];

const result = numbers.filter(filter);
console.log(result);

// ////////////////////////////////

// Interfaces

interface UserWallet {
  coins?: number;
  credits?: number;
}

interface User {
  name: string;
  createdAt: Date;
  wallet?: UserWallet;
}

function createUser(name: string): User {
  return { name, createdAt: new Date() };
}

function updateWallet(user: User, wallet: UserWallet) {
  user.wallet = {
    ...user.wallet,
    ...wallet,
  };
}


const Mario = createUser("Mário");

updateWallet(Mario, { coins: 100, credits: 50 });
