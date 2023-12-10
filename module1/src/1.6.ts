// Learning function

// Normal function
// Arrow function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(2, 5);

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

//object --> function --> method

const poorUser = {
  name: "morsaline",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is ${this.balance + balance}`;
  },
};

const array: number[] = [1, 4, 10];

const newArr = array.map((elem: number): number => elem * elem); // map creats a new array
