{
  // Interface // type alias work with only object

  type User1 = {
    name: string;
    age: number;
  };

  type Userwithrole1 = User1 & {
    role: string;
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface Userwithrole2 extends User1 {
    role: string;
  }
  const user1: Userwithrole2 = {
    name: "morsaline",
    age: 100,
    role: "manger",
  };

  type rollNumber = number;

  //js --> object , array> object function --> object

  //   type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];

  //   type Add = (num1: number, num2: number) => number;

  //
  interface Add {
    (num1: number, num2: number): number;
  }
  const add: Add = (num1, num2) => num1 + num2;

  //
}
