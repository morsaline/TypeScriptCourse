{
  //abstraction : 1. interface 2. abstract

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implimentation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`iam starting the car engine`);
    }

    stopEngine(): void {
      console.log(`i am stopping the car enginge`);
    }

    move(): void {
      console.log(`iam moving the car`);
    }

    test() {
      console.log(`i am testing`);
    }
  }

  const toyotaCar = new Car();

  toyotaCar.startEngine();

  // abstract class

  // idea
  abstract class Car2 {
    abstract startEngine(): void;

    abstract stopEngine(): void;

    abstract move(): void;
  }

  class TyotaCar extends Car2 {
    startEngine(): void {
      console.log(`i am stopping the car enginge`);
    }
    stopEngine(): void {
      console.log(`i am stopping the car enginge`);
    }
    move(): void {
      console.log(`iam moving the car`);
    }
  }

  const hondacar = new TyotaCar();

  hondacar.startEngine();
  //
}
