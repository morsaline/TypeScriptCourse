{
  // static
  class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decreament() {
      return (Counter.count = Counter.count - 1);
    }
  }

  //   const instance1 = new Counter(); // 1 --> different memory
  console.log(Counter.increment());

  //   const instance2 = new Counter(); // 1 --> different memory
  console.log(Counter.increment());
  //
}
