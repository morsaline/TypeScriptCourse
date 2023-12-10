{
  // oop --> inheritence

class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
}

  class Student extends Parent {
   

    constructor(name: string, age: number, address: string) {
     super(name,age,address)
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  
  class Teacher extends Parent  {
   
    designation: string

    constructor(name: string, age: number, address: string , designation:string) {
      super(name,age,address)
      this.designation = designation
    }

   
    takeClass(numOfClass : number){
        console.log(`${this.name} will take ${numOfClass}`)
    }
  }

  const student1 = new Student("mr.studetn1", 20, "uganda");
  student1

  const techer = new Teacher("Morsaline",55,'bd', "professor")

  techer.
  //
}
