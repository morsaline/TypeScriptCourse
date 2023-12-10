{
  // oop - class

  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

    // parameter properties

    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {
      //   this.name = name;
      //   this.species = species;
      //   this.sound = sound;
    }

    makeSound() {
      console.log(`the ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("jarman shepared", "dog", "ghew ghew");

  const cat = new Animal("persian bhai", "cat", "mew meaws");

  cat.makeSound();

  //
}
