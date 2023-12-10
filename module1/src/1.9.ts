{
  //Type alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address?: string;
  };

  const student1: Student = {
    name: "morsaline",
    age: 22,
    gender: "male",
    contactNo: "055555",
    address: "chandpur",
  };

  const student2: Student = {
    name: "ronnie",
    age: 23,
    gender: "male",
    address: "Dhaka",
  };

  const student3: Student = {
    name: "mostofa",
    age: 24,
    gender: " male",
  };

  type UserName = string;
  type IsAdmin = boolean;
  const userName: UserName = " Morsaline";
  const isAdmin: IsAdmin = true;

  //function type alias
  type Add = (num1: number, num2: number) => Number;
  const add: Add = (num1, num2) => num1 + num2;
  //
}
