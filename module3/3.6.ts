{
  // getter and setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    private _balance: number; // private/protected

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }
    //setter
    set deposit(amount: number) {
      this._balance = this.balance + amount;
    }

    // public addDeposite(amount: number) {
    //   this._balance = this._balance + amount;
    // }

    //getter
    get balance() {
      return this._balance;
    }

    // public getBalance() {
    //   return this._balance;
    // }
  }

  const goribManushAcccount = new BankAccount(11, "mr.gorid", 120); // funtion call korte hoche

  goribManushAcccount.deposit = 50;

  const myBalance = goribManushAcccount.balance; // proporty ir moto kore
  console.log(myBalance);

  //   goribManushAcccount.deposit = 0;
  //   goribManushAcccount.addDeposite(55);
  //
}
